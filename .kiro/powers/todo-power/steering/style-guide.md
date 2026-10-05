# Workflow: CSS and Design Style Guide

Follow these rules for all styling changes in the To-Do List app.

## Color Palette

| Name         | Hex       | Used for                        |
|--------------|-----------|---------------------------------|
| Primary      | `#667eea` | Buttons, checkbox, focus border |
| Primary Dark | `#5a67d8` | Button hover state              |
| Background   | `#f0f4f8` | Page background                 |
| Card         | `#ffffff` | Container background            |
| Task BG      | `#f7fafc` | Individual task item background |
| Task Hover   | `#edf2f7` | Task item hover background      |
| Border       | `#e2e8f0` | Task item border, input border  |
| Text Main    | `#2d3748` | Headings                        |
| Text Body    | `#333333` | Body text                       |
| Text Muted   | `#718096` | Counter, secondary text         |
| Text Faded   | `#a0aec0` | Completed task text, empty msg  |
| Delete       | `#fc8181` | Delete button color             |
| Delete Hover | `#e53e3e` | Delete button hover             |

## Typography

- Font family: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Base font size: `0.95rem` for body text
- Heading: `1.8rem` (desktop), `1.5rem` (mobile ≤400px)
- Small text: `0.85rem` (counter, empty message)

## Spacing

- Container padding: `32px 28px` (desktop), `24px 16px` (mobile)
- Task item padding: `12px 14px`
- Gap between tasks: `10px`
- Input/button gap: `10px`

## Border Radius

- Container: `12px`
- Input, button, task item: `8px`
- Delete button: `4px`

## Transitions

Always use transitions for interactive elements:
```css
transition: background 0.2s;
transition: border-color 0.2s;
transition: color 0.2s, background 0.2s;
transition: background 0.2s, transform 0.1s;
```

## Responsive Breakpoint

All mobile overrides go inside:
```css
@media (max-width: 400px) {
  /* mobile styles here */
}
```

## Adding New UI Elements

1. Follow the card pattern — new sections go inside `.container`
2. Use `display: flex` with `gap` for row layouts
3. Use `flex: 1` on inputs/text that should stretch
4. Use `flex-shrink: 0` on icons/buttons that should stay fixed size
5. Always test the new element at 380px width

## Do NOT

- Do not use external CSS frameworks (Bootstrap, Tailwind)
- Do not use inline styles in HTML
- Do not use `!important` unless absolutely necessary
- Do not change existing class names or IDs
- Do not use fixed pixel widths on the container
