# Workflow: Adding a New Feature

Follow these steps every time you add a new feature to the To-Do List app.

## Step 1 — Read existing files first
Always read the current state of all three files before writing any code:
- Read `index.html` to understand current structure
- Read `style.css` to match existing styles
- Read `script.js` to understand current logic flow

## Step 2 — Plan the change
Answer these questions before coding:
1. Does this feature need a new HTML element? → add to `index.html`
2. Does this feature need new styles? → add to `style.css`
3. Does this feature need new JS logic? → add to `script.js`
4. Does this feature need to save data? → use `localStorage` with key `"tasks"`

## Step 3 — HTML changes
- Add new elements inside `.container` in `index.html`
- Give every interactive element a unique, descriptive `id`
- Keep the structure clean and semantic

## Step 4 — CSS changes
- Add new styles at the bottom of `style.css`
- Use the existing color palette:
  - Primary: `#667eea`
  - Hover: `#5a67d8`
  - Background: `#f0f4f8`
  - Card: `#ffffff`
  - Muted text: `#718096`, `#a0aec0`
- Add responsive styles inside `@media (max-width: 400px)` if needed

## Step 5 — JavaScript changes
- Add new functions at the bottom of `script.js`
- Grab new DOM elements at the top of the file with `document.getElementById`
- Add event listeners in the "Event Listeners" section
- Always add comments explaining what new functions do
- If the feature changes task data, always call `saveTasks()` then `renderTasks()`

## Step 6 — Test
- Open `index.html` in the browser
- Test the new feature manually
- Open browser DevTools (F12) → Console → check for errors
- Test on a narrow screen (resize browser to ~380px width)
