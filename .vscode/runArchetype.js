#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const VSCODE_DIR = __dirname;
const STATE_FILE = path.join(VSCODE_DIR, 'state.json');
const LOG_FILE = path.join(VSCODE_DIR, 'workflow.log');

function appendLog(message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, entry);
  console.log(entry.trim());
}

function updateState(updates) {
  const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  const newState = { ...state, ...updates };
  const tempFile = STATE_FILE + '.tmp';
  fs.writeFileSync(tempFile, JSON.stringify(newState, null, 2));
  fs.renameSync(tempFile, STATE_FILE);
  return newState;
}

function openArchetypeFile(archetype) {
  const archetypePath = path.join(VSCODE_DIR, 'archetypes', `${archetype}.md`);

  console.log(`\n📋 Opening archetype file: ${archetypePath}`);

  // Try to open in VS Code
  try {
    execSync(`code --reuse-window "${archetypePath}"`, { stdio: 'ignore' });
    console.log(`✓ Opened ${archetype}.md in VS Code`);
  } catch (error) {
    console.log(`⚠ Could not open in VS Code automatically.`);
    console.log(`📂 Please open: ${archetypePath}`);
  }
}

function runApplyScript(archetype) {
  const scriptPath = path.join(VSCODE_DIR, `apply${archetype.charAt(0).toUpperCase() + archetype.slice(1)}.js`);

  console.log(`\n⚙️  Executing ${archetype} logic...`);

  try {
    const output = execSync(`node "${scriptPath}"`, { encoding: 'utf8' });
    console.log(output);
    return true;
  } catch (error) {
    console.error(`❌ Error running ${archetype} script:`, error.message);
    appendLog(`ERROR: Failed to run ${archetype} script: ${error.message}`);
    return false;
  }
}

function main() {
  const archetype = process.argv[2];

  if (!archetype || !['planner', 'implementer', 'reviewer'].includes(archetype)) {
    console.error('Usage: node runArchetype.js <planner|implementer|reviewer>');
    process.exit(1);
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`🚀 Starting ${archetype.toUpperCase()} archetype`);
  console.log(`${'='.repeat(60)}\n`);

  appendLog(`\n${'='.repeat(60)}`);
  appendLog(`Starting ${archetype.toUpperCase()} archetype`);
  appendLog(`${'='.repeat(60)}`);

  // Update active archetype
  updateState({ activeArchetype: archetype });
  console.log(`✓ Set active archetype to: ${archetype}`);

  // Open archetype markdown file
  openArchetypeFile(archetype);

  // Run the apply script
  const success = runApplyScript(archetype);

  if (success) {
    console.log(`\n✅ ${archetype.toUpperCase()} archetype completed successfully`);
    appendLog(`${archetype.toUpperCase()} archetype completed successfully`);
  } else {
    console.log(`\n❌ ${archetype.toUpperCase()} archetype failed`);
    appendLog(`${archetype.toUpperCase()} archetype failed`);
    process.exit(1);
  }

  console.log(`\n${'='.repeat(60)}\n`);
}

main();
