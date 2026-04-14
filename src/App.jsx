import { useState } from "react";
import "./styles.css";

const GRID_SIZE = 5;
const paletteColors = ["red", "green", "blue", "purple"];

export default function App() {
  const [grid, setGrid] = useState(
    Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill("grey"))
  );
  const [selectedColor, setSelectedColor] = useState("grey");

  const handlePaletteClick = (color) => {
    setSelectedColor(color);
  };

  const handleCellHover = (row, col) => {
    const nextGrid = grid.map((currentRow) => [...currentRow]);
    nextGrid[row][col] = selectedColor;
    setGrid(nextGrid);
  };

  return (
    <div className="App">
      <h1>Color Grid Palette</h1>
      <p>Select a color, then hover over the grid to fill cells with that color.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 60px)`,
          gap: 4,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cellColor, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onMouseEnter={() => handleCellHover(rowIndex, colIndex)}
              style={{
                width: 60,
                height: 60,
                border: "1px solid #333",
                backgroundColor: cellColor,
                cursor: "pointer",
              }}
              aria-label={`Grid cell ${rowIndex + 1}-${colIndex + 1}`}
            />
          ))
        )}
      </div>

      <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center" }}>
        {paletteColors.map((color) => (
          <button
            key={color}
            onClick={() => handlePaletteClick(color)}
            style={{
              width: 90,
              height: 50,
              border: selectedColor === color ? "3px solid black" : "1px solid #666",
              backgroundColor: color,
              color: "white",
              cursor: "pointer",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
