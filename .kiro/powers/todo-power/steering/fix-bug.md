# Workflow: Fixing a Bug

Follow these steps to debug and fix issues in the To-Do List app.

## Common Bugs and Fixes

### Bug: Tasks not saving after refresh
**Cause:** `saveTasks()` not being called after a change
**Fix:** Make sure every function that modifies `tasks` array calls `saveTasks()` before `renderTasks()`
```js
saveTasks();   // always first
renderTasks(); // always second
```

### Bug: Tasks not showing on page load
**Cause:** `renderTasks()` not called on startup, or localStorage data is corrupted
**Fix:** Check the top of `script.js` — must have:
```js
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks(); // called immediately after
```

### Bug: Delete or toggle not working
**Cause:** Task `id` mismatch — `id` must be a number (`Date.now()`), not a string
**Fix:** Make sure `id` comparison uses `!==` not `!=`, and ids are stored as numbers

### Bug: Checkbox not staying checked after refresh
**Cause:** `completed` state not saved to localStorage
**Fix:** Confirm `saveTasks()` is called inside `toggleTask()`

### Bug: Empty task being added
**Cause:** Missing `.trim()` check
**Fix:** Confirm `addTask()` has:
```js
const text = taskInput.value.trim();
if (text === '') return;
```

### Bug: Counter showing wrong number
**Cause:** `updateCount()` not called after render
**Fix:** Make sure `renderTasks()` calls `updateCount()` at the end

## Debugging Steps

1. Open browser DevTools with `F12`
2. Click the **Console** tab
3. Look for red error messages
4. Click the error to see which line in `script.js` caused it
5. Read the file at that line and fix the issue
6. Refresh the browser and test again

## Clearing Corrupted localStorage

If tasks are behaving strangely, clear localStorage in DevTools:
1. F12 → **Application** tab → **Local Storage** → `file://` or `localhost`
2. Right-click `tasks` → Delete
3. Refresh the page
