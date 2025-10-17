# Quick Copilot Archetype Prompts

Copy-paste these prompts directly into GitHub Copilot Chat to activate different archetypes.

## 🎯 Planner Prompts

### General Planning
```
@workspace Act as a Planner archetype. Read .vscode/archetypes/planner.md for your rules.

Analyze the current codebase and create a detailed plan for: [describe feature/goal]

Output a numbered task list with:
- Specific file references
- Clear acceptance criteria
- Dependency relationships
```

### Feature Planning
```
@workspace /planner
I need to add [feature description].

Check .vscode/state.json for existing tasks, then create a plan with:
1. Required files to create/modify
2. Specific tasks in implementation order
3. Dependencies between tasks
4. Estimated complexity (simple/medium/complex)
```

### Refactoring Planning
```
@workspace /planner
I want to refactor [component/module] to [goal].

Create a safe refactoring plan that:
1. Identifies all dependencies
2. Suggests incremental steps
3. Notes potential breaking changes
4. Recommends testing strategy
```

---

## 🔧 Implementer Prompts

### Single Task Implementation
```
@workspace Act as an Implementer archetype. Read .vscode/archetypes/implementer.md for your rules.

Implement this task: [task description]

Target files: [file paths]

Requirements:
- Make minimal, focused changes
- Preserve existing code style
- Add inline comments for complex logic
- Use Copilot Edits mode for multi-file changes
```

### Feature Implementation
```
@workspace /implementer
Implement [feature name] according to the plan in .vscode/state.json.

Focus on task #[N]: [task description]

Make the changes atomic and testable.
```

### Bug Fix Implementation
```
@workspace /implementer
Fix this bug: [bug description]

Steps:
1. Locate the root cause
2. Implement minimal fix
3. Add defensive checks
4. Suggest test cases
```

---

## 🔍 Reviewer Prompts

### Code Review
```
@workspace Act as a Reviewer archetype. Read .vscode/archetypes/reviewer.md for your rules.

Review the recent changes to [file/component].

Evaluate:
1. Correctness and completeness
2. Edge cases and error handling
3. Performance implications
4. Security concerns
5. Test coverage
6. Code style consistency

Provide specific, actionable recommendations.
```

### Security Review
```
@workspace /reviewer
Perform a security review of [component/feature].

Check for:
- Input validation
- Authentication/authorization
- SQL injection / XSS risks
- Sensitive data exposure
- Proper error handling
```

### Performance Review
```
@workspace /reviewer
Review [component] for performance issues.

Analyze:
- Algorithmic complexity
- Memory usage
- Unnecessary re-renders (React)
- Database query efficiency
- Caching opportunities
```

---

## 🔄 Multi-Archetype Workflows

### Complete Feature Flow
```
Step 1 - Plan:
@workspace /planner
Add user authentication with JWT tokens

Step 2 - Implement (repeat for each task):
@workspace /implementer
Task 1: Create auth service in src/services/auth.ts

Step 3 - Review:
@workspace /reviewer
Review the auth service implementation for security issues

Step 4 - Refine:
@workspace /implementer
Address the security concerns from the review
```

### Investigation + Fix Flow
```
Step 1 - Analyze (Reviewer):
@workspace /reviewer
Investigate why [feature] is broken

Step 2 - Plan Fix:
@workspace /planner
Create a plan to fix the issues identified in the review

Step 3 - Implement:
@workspace /implementer
Execute the fix plan
```

### Refactoring Flow
```
Step 1 - Review Current Code:
@workspace /reviewer
Analyze [component] and identify refactoring opportunities

Step 2 - Create Refactoring Plan:
@workspace /planner
Based on the review, create a safe refactoring plan

Step 3 - Execute Refactoring:
@workspace /implementer
Refactor according to task #1 from the plan
```

---

## 🎨 Advanced Patterns

### Cascade Mode (Windsurf-style)
Let Copilot chain archetypes automatically:

```
@workspace I need to add a real-time notification system.

Please work through this in phases:
1. Use Planner archetype to create a detailed plan
2. Use Implementer archetype to build each component
3. Use Reviewer archetype after each implementation
4. Iterate based on review feedback

Save state to .vscode/state.json after each phase.
```

### Context Injection
Reference specific archetype files:

```
@workspace
#file:.vscode/archetypes/implementer.md

Acting as this archetype, implement [task]
```

### State-Aware Operations
```
@workspace
Read .vscode/state.json.

If there are pending todos:
  - Act as Implementer and complete the next task

If the last task needs review:
  - Act as Reviewer and evaluate it

If there are no tasks:
  - Act as Planner and ask what I want to build
```

---

## 🚀 Quick Reference

| Goal | Archetype | Key Phrase |
|------|-----------|------------|
| Break down feature | Planner | `@workspace /planner Create a plan for...` |
| Write code | Implementer | `@workspace /implementer Implement...` |
| Review code | Reviewer | `@workspace /reviewer Review...` |
| Debug issue | Reviewer → Planner → Implementer | Chain prompts |
| Refactor | Reviewer → Planner → Implementer | Chain prompts |
| Add feature | Planner → Implementer → Reviewer | Chain prompts |

---

## 💡 Tips for Best Results

1. **Be Specific**: Reference exact file paths and function names
2. **Use @workspace**: Ensures Copilot has full context
3. **Reference State**: Mention `.vscode/state.json` to maintain continuity
4. **Chain Thoughtfully**: Use Planner → Implementer → Reviewer for complex work
5. **Use Edits Mode**: For Implementer tasks, use Copilot Edits (Cmd+Shift+I)
6. **Iterate**: Don't expect perfection on first pass - review and refine

---

## 🔧 Copilot Features to Use

- **Copilot Chat** (Cmd+Shift+I): Main interface for archetype interaction
- **Copilot Edits**: Multi-file editing mode (great for Implementer)
- **@workspace**: Include full workspace context
- **#file**: Reference specific files in prompts
- **Inline Chat** (Cmd+I): Quick edits with archetype context

---

## Example Session

```
You: @workspace /planner
     Add a settings page with theme toggle

Copilot: [Creates task list]
     1. Create Settings.tsx component
     2. Add theme context provider
     3. Implement toggle switch
     4. Persist preference to localStorage
     [Saves to state.json]

You: @workspace /implementer
     Implement task 1: Create Settings.tsx

Copilot: [Opens Edits mode, creates component]

You: @workspace /reviewer
     Review the Settings component

Copilot: [Provides feedback]
     ✅ Component structure looks good
     ⚠️ Consider adding PropTypes
     ⚠️ Add error handling for localStorage
     💡 Recommend adding loading state

You: @workspace /implementer
     Add the improvements suggested by reviewer

Copilot: [Makes refinements]
```
