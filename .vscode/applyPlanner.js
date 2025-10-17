#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = __dirname;
const STATE_FILE = path.join(VSCODE_DIR, 'state.json');
const LOG_FILE = path.join(VSCODE_DIR, 'workflow.log');
const SOURCE_FILE = path.join(VSCODE_DIR, 'sample_source', 'app.txt');
const ARCHETYPE_FILE = path.join(VSCODE_DIR, 'archetypes', 'planner.md');

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

function analyzeTODOsInSource() {
  const content = fs.readFileSync(SOURCE_FILE, 'utf8');
  const lines = content.split('\n');
  const todos = [];

  lines.forEach((line, index) => {
    if (line.includes('TODO:')) {
      const description = line.replace(/^.*TODO:\s*/, '').trim();
      if (description) {
        todos.push({
          id: `todo-${Date.now()}-${index}`,
          description: `Implement: ${description}`,
          file: 'sample_source/app.txt',
          line: index + 1,
          created: new Date().toISOString()
        });
      }
    }
  });

  return todos;
}

function main() {
  console.log('📝 PLANNER: Analyzing codebase and generating tasks...\n');

  // Read archetype context
  const archetypeContent = fs.readFileSync(ARCHETYPE_FILE, 'utf8');
  appendLog('PLANNER: Loaded planner archetype context');
  console.log('✓ Loaded planner archetype rules');

  // Read current state
  const state = readState();
  console.log(`✓ Current todos in queue: ${state.todos.length}`);

  // Analyze source file for TODOs
  const newTodos = analyzeTODOsInSource();
  console.log(`✓ Found ${newTodos.length} TODO items in source code`);

  // Filter out duplicates (check if similar todos already exist)
  const existingDescriptions = new Set(state.todos.map(t => t.description));
  const uniqueTodos = newTodos.filter(todo => !existingDescriptions.has(todo.description));

  if (uniqueTodos.length === 0) {
    console.log('\n⚠ No new todos to add (all existing todos are already tracked)');
    appendLog('PLANNER: No new todos added (no changes needed)');
    return;
  }

  // Add new todos to state
  state.todos.push(...uniqueTodos);
  writeState(state);

  console.log(`\n✅ Added ${uniqueTodos.length} new todo(s) to the queue:\n`);
  uniqueTodos.forEach((todo, index) => {
    console.log(`   ${index + 1}. ${todo.description}`);
    console.log(`      File: ${todo.file}:${todo.line}`);
  });

  // Log the changes
  appendLog('PLANNER: Generated and added new todos');
  appendLog(JSON.stringify({
    action: 'add_todos',
    count: uniqueTodos.length,
    todos: uniqueTodos.map(t => ({ description: t.description, file: t.file }))
  }, null, 2));

  console.log(`\n📊 Total todos in queue: ${state.todos.length}`);
  console.log(`📊 Completed tasks: ${state.completed.length}`);
}

main();
