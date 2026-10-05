# Simple To-Do List App — Project Steering Document

## Project Overview

This is a beginner-friendly To-Do List web application built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no backend, no dependencies. It runs entirely in the browser by opening `index.html`.

---

## Project Structure

```
kiroproject/
├── index.html       ← Main HTML page (structure)
├── style.css        ← All styling and responsive layout
├── script.js        ← All JavaScript logic
└── .kiro/
    ├── settings/
    │   └── mcp.json         ← MCP filesystem server config
    ├── hooks/
    │   ├── todo-auto-review.json    ← Auto review script.js on save
    │   ├── todo-css-review.json     ← Auto review style.css on save
    │   ├── todo-html-review.json    ← Auto review index.html on save
    │   └── todo-new-file-alert.json ← Alert when new file is created
    └── steering/
        └── project.md       ← This file
```

---

## Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Structure  | HTML5              |
| Styling    | CSS3               |
| Logic      | Vanilla JavaScript |
| Storage    | Browser localStorage |
| Runtime    | Any modern browser |

---

## Core Features

1. **Add Task** — Type in the input box and click "Add Task" or press Enter
2. **Complete Task** — Click the checkbox to mark a task as done (strikethrough)
3. **Delete Task** — Click the ✕ button to remove a task
4. **Pending Counter** — Shows how many tasks are not yet completed
5. **localStorage** — Tasks are saved and persist after page refresh
6. **Responsive UI** — Works on desktop and mobile screens

---

## JavaScript Architecture

All logic lives in `script.js`. Key functions:

| Function | Purpose |
|----------|---------|
| `addTask()` | Reads input, creates task object, saves, renders |
| `deleteTask(id)` | Filters out task by id, saves, renders |
| `toggleTask(id)` | Flips completed true/false, saves, renders |
| `saveTasks()` | Serializes tasks array to localStorage |
| `renderTasks()` | Rebuilds the entire task list in the DOM |
| `updateCount()` | Counts pending tasks and updates the counter text |

Task object shape:
```js
{
  id: 1234567890,   // Date.now() — unique number
  text: "Buy milk", // Task description string
  completed: false  // Boolean — true when checked
}
```

---

## Coding Standards

- **No frameworks** — Do not introduce React, Vue, jQuery, or any library
- **No backend** — Do not add Node.js, Express, or any server-side code
- **No build tools** — Do not add Webpack, Vite, or npm scripts
- **Vanilla JS only** — Use plain `document.getElementById`, `addEventListener`, etc.
- **Comments** — All important JS sections must have comments explaining what they do
- **Readable code** — Use clear variable names, proper indentation (2 spaces)
- **ES6+ allowed** — `const`, `let`, arrow functions, template literals are fine

---

## CSS Standards

- Use the existing color palette:
  - Primary: `#667eea` (purple-blue)
  - Hover: `#5a67d8`
  - Background: `#f0f4f8`
  - Card: `#ffffff`
  - Text muted: `#718096`, `#a0aec0`
- Keep the card-based layout (`.container` with `max-width: 520px`)
- All new UI elements must be **responsive** (test at ≤400px width)
- Use `transition` for smooth hover/active states

---

## localStorage Rules

- Storage key: `"tasks"`
- Always use `JSON.stringify()` when saving and `JSON.parse()` when reading
- Always call `saveTasks()` after any change to the `tasks` array
- Always call `renderTasks()` after saving to keep UI in sync

---

## How to Run

1. Open VS Code
2. Right-click `index.html`
3. Click **"Open with Live Server"**
4. App opens at `http://127.0.0.1:5500`

Or simply double-click `index.html` in File Explorer to open in browser.

---

## Do NOT Add

- ❌ React, Vue, Angular, or any JS framework
- ❌ Node.js or any backend server
- ❌ Database (SQL, MongoDB, Firebase, etc.)
- ❌ npm packages or package.json
- ❌ External CSS frameworks (Bootstrap, Tailwind, etc.)
- ❌ CDN links for libraries
- ❌ Build tools (Webpack, Vite, Parcel)

---

## MCP Server

A filesystem MCP server is configured in `.kiro/settings/mcp.json`.
It gives Kiro read access to the project folder so it can inspect files automatically.
Requires `uvx` to be installed (`pip install uv`).

---

## Agent Hooks

Four hooks are configured in `.kiro/hooks/`:

- **todo-auto-review** — triggers on `script.js` save → reviews JS logic
- **todo-css-review** — triggers on `style.css` save → reviews CSS
- **todo-html-review** — triggers on `index.html` save → verifies HTML structure
- **todo-new-file-alert** — triggers on new file → checks if it needs linking in `index.html`

---

## Notes for Kiro

- Always read the existing files before making changes
- Match the existing code style — 2-space indentation, `function` keyword style in JS
- Do not rename existing element IDs (`taskInput`, `addBtn`, `taskList`, `taskCount`)
- Do not change the existing color scheme without user approval
- Keep all code beginner-friendly with clear comments
