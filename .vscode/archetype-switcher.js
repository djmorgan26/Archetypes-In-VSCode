#!/usr/bin/env node

/**
 * Archetype Switcher for GitHub Copilot
 *
 * This script helps you quickly generate archetype-specific prompts for Copilot Chat.
 * Use with VS Code tasks or command line.
 */

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = __dirname;
const ARCHETYPES_DIR = path.join(VSCODE_DIR, 'archetypes');

const ARCHETYPE_PROMPTS = {
  planner: {
    emoji: '🎯',
    fullPrompt: `@workspace Act as a Planner archetype. Read .vscode/archetypes/planner.md for your rules.

Check .vscode/state.json for existing tasks to avoid duplicates.

Create a detailed plan with:
- Numbered task list
- Specific file references
- Clear acceptance criteria
- Dependency relationships

Task to plan: `,
    shortPrompt: '@workspace /planner '
  },

  implementer: {
    emoji: '🔧',
    fullPrompt: `@workspace Act as an Implementer archetype. Read .vscode/archetypes/implementer.md for your rules.

Make focused, minimal changes that complete the specific task.
Use Copilot Edits mode for multi-file changes.

Task to implement: `,
    shortPrompt: '@workspace /implementer '
  },

  reviewer: {
    emoji: '🔍',
    fullPrompt: `@workspace Act as a Reviewer archetype. Read .vscode/archetypes/reviewer.md for your rules.

Review the code and provide:
- Assessment of changes
- List of concerns
- Specific recommendations
- Security considerations
- Testing suggestions

Code to review: `,
    shortPrompt: '@workspace /reviewer '
  }
};

function showMenu() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║        GitHub Copilot Archetype Switcher              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  console.log('Available archetypes:\n');
  console.log('  1. 🎯 Planner      - Plan and break down tasks');
  console.log('  2. 🔧 Implementer  - Write code and implement features');
  console.log('  3. 🔍 Reviewer     - Review code and provide feedback');
  console.log('  4. 📋 View State   - Show current state.json');
  console.log('  5. 📝 View Prompts - Show available prompt templates');
  console.log('\n  0. Exit\n');
}

function getArchetypePrompt(archetype, short = false) {
  const info = ARCHETYPE_PROMPTS[archetype];
  if (!info) {
    return null;
  }

  const prompt = short ? info.shortPrompt : info.fullPrompt;

  console.log('\n' + '='.repeat(60));
  console.log(`${info.emoji} ${archetype.toUpperCase()} PROMPT`);
  console.log('='.repeat(60));
  console.log('\nCopy this prompt to Copilot Chat:\n');
  console.log(prompt);
  console.log('\n' + '='.repeat(60));
  console.log('\nUsage:');
  console.log('1. Open Copilot Chat (Cmd+Shift+I or Ctrl+Shift+I)');
  console.log('2. Paste the prompt above');
  console.log('3. Add your specific task/question');
  console.log('4. Press Enter\n');

  return prompt;
}

function showState() {
  const statePath = path.join(VSCODE_DIR, 'state.json');
  try {
    const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    console.log('\n' + '='.repeat(60));
    console.log('CURRENT STATE');
    console.log('='.repeat(60));
    console.log(`\nActive Archetype: ${state.activeArchetype}`);
    console.log(`\nPending TODOs: ${state.todos.length}`);
    if (state.todos.length > 0) {
      state.todos.forEach((todo, i) => {
        console.log(`  ${i + 1}. ${todo.description}`);
      });
    }
    console.log(`\nCompleted Tasks: ${state.completed.length}`);
    console.log(`Reviews: ${state.reviews.length}`);
    console.log('\n' + '='.repeat(60) + '\n');
  } catch (error) {
    console.error('Error reading state:', error.message);
  }
}

function showPromptTemplates() {
  console.log('\n' + '='.repeat(60));
  console.log('QUICK PROMPT TEMPLATES');
  console.log('='.repeat(60));

  console.log('\n📋 Planning:');
  console.log('   @workspace /planner Add [feature description]');

  console.log('\n🔧 Implementation:');
  console.log('   @workspace /implementer Implement task #[N] from state.json');

  console.log('\n🔍 Review:');
  console.log('   @workspace /reviewer Review [file/component]');

  console.log('\n🔄 Cascade (Multi-archetype):');
  console.log('   @workspace I need [feature]. Use planner → implementer → reviewer workflow.');

  console.log('\n📖 Full templates available in:');
  console.log('   .vscode/copilot-prompts.md');
  console.log('\n' + '='.repeat(60) + '\n');
}

function main() {
  const arg = process.argv[2];

  // Direct archetype argument
  if (arg && ARCHETYPE_PROMPTS[arg]) {
    getArchetypePrompt(arg, false);
    return;
  }

  // Special commands
  if (arg === 'state') {
    showState();
    return;
  }

  if (arg === 'prompts') {
    showPromptTemplates();
    return;
  }

  // Interactive menu
  if (!arg) {
    showMenu();
    console.log('Usage: node archetype-switcher.js <planner|implementer|reviewer|state|prompts>');
    console.log('\nOr run tasks from VS Code Command Palette: Tasks: Run Task');
    return;
  }

  console.log(`Unknown archetype: ${arg}`);
  console.log('Available: planner, implementer, reviewer, state, prompts');
}

main();
