# Color Grid Palette

## Problem Statement

Build a color grid and a palette selector. When the user selects a color from the palette, hovering over the grid fills each cell with that selected color.

## What this app does

- Renders a 5x5 grid of color cells
- Displays a palette of colors below the grid
- Lets the user select a color from the palette
- When the user hovers over a grid cell, the hovered cell is filled with the selected color

## Files

- `src/App.jsx` - main React component implementing the grid and palette logic
- `src/styles.css` - base styles for the app

## Run locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```
3. Open the app in your browser at the address shown by Vite.

## Notes

- The selected palette color is shown as the active choice.
- Hovering over a grid cell applies the selected color immediately.
