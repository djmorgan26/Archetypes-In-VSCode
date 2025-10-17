#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = __dirname;
const STATE_FILE = path.join(VSCODE_DIR, 'state.json');
const LOG_FILE = path.join(VSCODE_DIR, 'workflow.log');
const SOURCE_FILE = path.join(VSCODE_DIR, 'sample_source', 'app.txt');

function appendLog(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, entry);
}

function readState() {
  return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
}

function writeState(state) {
  const tempFile = STATE_FILE + '.tmp';
  fs.writeFileSync(tempFile, JSON.stringify(state, null, 2));
  fs.renameSync(tempFile, STATE_FILE);
}

function implementTodo(todo) {
  const content = fs.readFileSync(SOURCE_FILE, 'utf8');
  const lines = content.split('\n');

  let modified = false;
  let beforeLine = '';
  let afterLine = '';

  // Find and replace TODO lines with implementations
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('TODO:')) {
      const todoText = lines[i].replace(/^.*TODO:\s*/, '').trim();

      // Match the todo with what we're implementing
      if (todo.description.toLowerCase().includes(todoText.toLowerCase())) {
        beforeLine = lines[i];

        // Generate an implementation based on the TODO
        if (todoText.includes('hello')) {
          lines[i] = 'function hello() {\n  return "Hello, World!";\n}';
        } else if (todoText.includes('error handling')) {
          lines[i] = 'function handleError(error) {\n  console.error("Error:", error.message);\n  return { success: false, error: error.message };\n}';
        } else {
          // Generic implementation
          lines[i] = `// Implemented: ${todoText}\nfunction ${todoText.replace(/\s+/g, '_')}() {\n  // Implementation here\n  return true;\n}`;
        }

        afterLine = lines[i];
        modified = true;
        break;
      }
    }
  }

  if (modified) {
    const newContent = lines.join('\n');
    const tempFile = SOURCE_FILE + '.tmp';
    fs.writeFileSync(tempFile, newContent);
    fs.renameSync(tempFile, SOURCE_FILE);

    return {
      success: true,
      before: beforeLine,
      after: afterLine
    };
  }

  return { success: false };
}

function main() {
  console.log('🔧 IMPLEMENTER: Executing tasks from the queue...\n');

  const state = readState();

  if (state.todos.length === 0) {
    console.log('⚠ No todos in queue. Run the Planner first to generate tasks.');
    appendLog('IMPLEMENTER: No work to do (queue is empty)');
    return;
  }

  // Take the first todo
  const todo = state.todos[0];
  console.log(`📋 Taking task: ${todo.description}`);
  console.log(`   Target: ${todo.file}:${todo.line}\n`);

  // Implement it
  console.log('⚙️  Applying changes...');
  const result = implementTodo(todo);

  if (result.success) {
    console.log('✅ Implementation complete!\n');
    console.log('📝 Changes made:');
    console.log('   BEFORE:');
    console.log(`   ${result.before}`);
    console.log('   AFTER:');
    result.after.split('\n').forEach(line => console.log(`   ${line}`));

    // Move todo to completed
    state.todos.shift();
    state.completed.push({
      ...todo,
      completedAt: new Date().toISOString(),
      changes: {
        before: result.before,
        after: result.after
      }
    });

    writeState(state);

    // Log the implementation
    appendLog('IMPLEMENTER: Completed task');
    appendLog(JSON.stringify({
      action: 'complete_todo',
      todo: todo.description,
      file: todo.file,
      before: result.before,
      after: result.after
    }, null, 2));

    console.log(`\n📊 Remaining todos: ${state.todos.length}`);
    console.log(`📊 Completed tasks: ${state.completed.length}`);
  } else {
    console.log('❌ Could not implement this task (no matching TODO found in source)');
    appendLog(`IMPLEMENTER: Failed to implement task: ${todo.description}`);
  }
}

main();
