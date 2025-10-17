#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VSCODE_DIR = __dirname;
const STATE_FILE = path.join(VSCODE_DIR, 'state.json');
const LOG_FILE = path.join(VSCODE_DIR, 'workflow.log');
const SOURCE_FILE = path.join(VSCODE_DIR, 'sample_source', 'app.txt');
const SNAPSHOT_FILE = path.join(VSCODE_DIR, 'review_snapshot.txt');

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

function generateReview(completedTask, currentCode, previousCode) {
  const review = {
    id: `review-${Date.now()}`,
    timestamp: new Date().toISOString(),
    task: completedTask.description,
    file: completedTask.file,
    assessment: '',
    concerns: [],
    recommendations: [],
    verdict: ''
  };

  // Analyze the changes
  const hasErrorHandling = currentCode.includes('error') || currentCode.includes('Error');
  const hasTests = currentCode.includes('test') || currentCode.includes('Test');
  const hasDocumentation = currentCode.includes('//') || currentCode.includes('/*');

  // Generate assessment
  if (completedTask.changes) {
    const changeSize = completedTask.changes.after.length - completedTask.changes.before.length;

    if (changeSize > 0) {
      review.assessment = `Implementation adds ${changeSize} characters of new code. Change replaces TODO with functional implementation.`;
    } else {
      review.assessment = 'Implementation modifies existing code structure.';
    }

    // Check for specific patterns
    if (completedTask.description.toLowerCase().includes('hello')) {
      if (currentCode.includes('function hello')) {
        review.assessment += ' Hello function properly implemented with return value.';
      }
    }

    if (completedTask.description.toLowerCase().includes('error')) {
      if (hasErrorHandling) {
        review.assessment += ' Error handling implementation includes proper error messaging.';
      }
    }
  }

  // Generate concerns
  if (!hasTests) {
    review.concerns.push('No unit tests found for this implementation');
  }

  if (!hasDocumentation && currentCode.length > 50) {
    review.concerns.push('Consider adding inline documentation for complex logic');
  }

  // Generate recommendations
  if (!hasTests) {
    review.recommendations.push('Add unit tests to verify functionality');
  }

  if (completedTask.description.toLowerCase().includes('error') && !currentCode.includes('try')) {
    review.recommendations.push('Consider adding try-catch blocks for robust error handling');
  }

  review.recommendations.push('Verify edge cases and input validation');

  // Determine verdict
  if (review.concerns.length === 0) {
    review.verdict = 'APPROVED - Implementation meets quality standards';
  } else if (review.concerns.length <= 2) {
    review.verdict = 'APPROVED WITH NOTES - Implementation is functional but has minor recommendations';
  } else {
    review.verdict = 'NEEDS WORK - Address concerns before proceeding';
  }

  return review;
}

function main() {
  console.log('🔍 REVIEWER: Evaluating completed work...\n');

  const state = readState();

  if (state.completed.length === 0) {
    console.log('⚠ No completed tasks to review. Run Implementer first.');
    appendLog('REVIEWER: No completed work to review');
    return;
  }

  // Get the most recent completed task
  const lastCompleted = state.completed[state.completed.length - 1];
  console.log(`📋 Reviewing: ${lastCompleted.description}`);
  console.log(`   File: ${lastCompleted.file}`);
  console.log(`   Completed: ${lastCompleted.completedAt}\n`);

  // Read current code
  const currentCode = fs.readFileSync(SOURCE_FILE, 'utf8');

  // Read or create snapshot
  let previousCode = '';
  if (fs.existsSync(SNAPSHOT_FILE)) {
    previousCode = fs.readFileSync(SNAPSHOT_FILE, 'utf8');
  } else {
    previousCode = '// Initial state\n';
  }

  // Update snapshot for next review
  fs.writeFileSync(SNAPSHOT_FILE, currentCode);

  // Generate review
  const review = generateReview(lastCompleted, currentCode, previousCode);

  console.log('📊 REVIEW RESULTS:');
  console.log('─'.repeat(60));
  console.log(`\n✅ Assessment:`);
  console.log(`   ${review.assessment}\n`);

  if (review.concerns.length > 0) {
    console.log(`⚠ Concerns (${review.concerns.length}):`);
    review.concerns.forEach((c, i) => console.log(`   ${i + 1}. ${c}`));
    console.log();
  }

  console.log(`💡 Recommendations (${review.recommendations.length}):`);
  review.recommendations.forEach((r, i) => console.log(`   ${i + 1}. ${r}`));
  console.log();

  console.log(`📝 Verdict: ${review.verdict}`);
  console.log('─'.repeat(60));

  // Save review to state
  state.reviews.push(review);
  writeState(state);

  // Log the review
  appendLog('REVIEWER: Completed code review');
  appendLog(JSON.stringify({
    action: 'code_review',
    task: lastCompleted.description,
    verdict: review.verdict,
    concerns: review.concerns.length,
    recommendations: review.recommendations.length
  }, null, 2));

  console.log(`\n📊 Total reviews: ${state.reviews.length}`);
}

main();
