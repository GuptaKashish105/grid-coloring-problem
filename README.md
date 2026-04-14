# Color Grid Palette

## Problem Statement

Create a dynamic NxN grid where N is input by the user. The app should render a palette with N different random colors, allow the user to choose one, and then let the user hover over grid cells to apply that chosen color.

---

## What this app does

- Allows the user to enter a grid size `N` and renders an `N x N` grid
- Initializes all grid cells with a white background
- Generates `N` random named palette colors for each grid size
- Lets the user pick one palette color and hover over cells to fill them
- Centers the grid and palette layout for a cleaner UI

## Files

- `src/App.jsx` - main React component implementing the grid, color palette, and user input logic
- `src/styles.css` - base app styles

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

- The input field controls the grid size dynamically.
- Palette colors are chosen from a named color list, not plain hex codes.
- The selected color is highlighted with a stronger border.
- Grid cells start white and update as the user hovers over them.
