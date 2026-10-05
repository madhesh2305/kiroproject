# To-Do List App Power

This power provides Kiro with structured guidance, tools awareness, and workflow
instructions specifically for the Simple To-Do List App project.

## What This Power Does

- Gives Kiro full context about the To-Do List project structure
- Provides workflow guides for common tasks (adding features, fixing bugs, styling)
- Ensures Kiro always follows the project's coding standards
- Speeds up development by having all rules and patterns ready instantly

## Project Quick Reference

### Files
| File | Role |
|------|------|
| `index.html` | Page structure — do not rename element IDs |
| `style.css` | All styles — use existing color palette |
| `script.js` | All logic — vanilla JS only, no frameworks |

### Key Element IDs (never rename these)
- `taskInput` — the text input box
- `addBtn` — the Add Task button
- `taskList` — the `<ul>` that holds all tasks
- `taskCount` — the pending counter paragraph

### Task Object Shape
```js
{ id: Date.now(), text: "string", completed: false }
```

### localStorage Key
```js
localStorage.getItem('tasks') // always "tasks"
```

## Workflows

See steering files for detailed guides:
- `add-feature.md` — How to add a new feature
- `fix-bug.md` — How to debug and fix issues
- `style-guide.md` — CSS and design rules

## Rules

- Vanilla HTML, CSS, JavaScript ONLY
- No frameworks, no npm, no backend
- Always comment important JS sections
- Always call saveTasks() + renderTasks() after any data change
- Never change the existing color scheme without user approval
