import { useState, useEffect } from "react";
import "./styles.css";

const colorOptions = [
  { name: "Red", hex: "#FF0000" },
  { name: "Green", hex: "#00FF00" },
  { name: "Blue", hex: "#0000FF" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Purple", hex: "#800080" },
  { name: "Orange", hex: "#FFA500" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Cyan", hex: "#00FFFF" },
  { name: "Magenta", hex: "#FF00FF" },
  { name: "Lime", hex: "#32CD32" },
  { name: "Brown", hex: "#A52A2A" },
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Gray", hex: "#808080" },
  { name: "Navy", hex: "#000080" },
  { name: "Teal", hex: "#008080" },
  { name: "Maroon", hex: "#800000" },
  { name: "Olive", hex: "#808000" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Indigo", hex: "#4B0082" },
  { name: "Violet", hex: "#EE82EE" },
  { name: "Turquoise", hex: "#40E0D0" },
  { name: "Salmon", hex: "#FA8072" },
  { name: "Coral", hex: "#FF7F50" },
  { name: "Tomato", hex: "#FF6347" },
  { name: "Crimson", hex: "#DC143C" },
  { name: "Firebrick", hex: "#B22222" },
  { name: "DarkGreen", hex: "#006400" },
  { name: "SeaGreen", hex: "#2E8B57" },
  { name: "SkyBlue", hex: "#87CEEB" },
  { name: "RoyalBlue", hex: "#4169E1" },
  { name: "SlateBlue", hex: "#6A5ACD" },
  { name: "Plum", hex: "#DDA0DD" },
  { name: "HotPink", hex: "#FF69B4" },
  { name: "DeepPink", hex: "#FF1493" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Khaki", hex: "#F0E68C" },
  { name: "Beige", hex: "#F5F5DC" },
  { name: "Ivory", hex: "#FFFFF0" },
  { name: "Snow", hex: "#FFFAFA" },
  { name: "MintCream", hex: "#F5FFFA" },
  { name: "Azure", hex: "#F0FFFF" },
  { name: "AliceBlue", hex: "#F0F8FF" },
  { name: "GhostWhite", hex: "#F8F8FF" },
  { name: "Honeydew", hex: "#F0FFF0" },
  { name: "FloralWhite", hex: "#FFFAF0" },
  { name: "OldLace", hex: "#FDF5E6" },
  { name: "Wheat", hex: "#F5DEB3" },
  { name: "Moccasin", hex: "#FFE4B5" },
  { name: "PapayaWhip", hex: "#FFEFD5" },
  { name: "BlanchedAlmond", hex: "#FFEBCD" },
  { name: "Bisque", hex: "#FFE4C4" },
  { name: "AntiqueWhite", hex: "#FAEBD7" },
  { name: "Tan", hex: "#D2B48C" },
  { name: "Burlywood", hex: "#DEB887" },
  { name: "SandyBrown", hex: "#F4A460" },
  { name: "Chocolate", hex: "#D2691E" },
  { name: "Sienna", hex: "#A0522D" },
  { name: "SaddleBrown", hex: "#8B4513" },
  { name: "DarkOliveGreen", hex: "#556B2F" },
  { name: "DarkSeaGreen", hex: "#8FBC8F" },
  { name: "LightGreen", hex: "#90EE90" },
  { name: "PaleGreen", hex: "#98FB98" },
  { name: "SpringGreen", hex: "#00FF7F" },
  { name: "MediumSpringGreen", hex: "#00FA9A" },
  { name: "LightSeaGreen", hex: "#20B2AA" },
  { name: "MediumAquamarine", hex: "#66CDAA" },
  { name: "Aquamarine", hex: "#7FFFD4" },
  { name: "PowderBlue", hex: "#B0E0E6" },
  { name: "LightBlue", hex: "#ADD8E6" },
  { name: "LightSteelBlue", hex: "#B0C4DE" },
  { name: "LightSkyBlue", hex: "#87CEFA" },
  { name: "CornflowerBlue", hex: "#6495ED" },
  { name: "DodgerBlue", hex: "#1E90FF" },
  { name: "DeepSkyBlue", hex: "#00BFFF" },
  { name: "SteelBlue", hex: "#4682B4" },
  { name: "MediumBlue", hex: "#0000CD" },
  { name: "DarkBlue", hex: "#00008B" },
  { name: "MidnightBlue", hex: "#191970" },
  { name: "MediumSlateBlue", hex: "#7B68EE" },
  { name: "DarkSlateBlue", hex: "#483D8B" },
  { name: "BlueViolet", hex: "#8A2BE2" },
  { name: "DarkViolet", hex: "#9400D3" },
  { name: "DarkMagenta", hex: "#8B008B" },
  { name: "DarkOrchid", hex: "#9932CC" },
  { name: "MediumOrchid", hex: "#BA55D3" },
  { name: "Orchid", hex: "#DA70D6" },
  { name: "Thistle", hex: "#D8BFD8" },
  { name: "MediumVioletRed", hex: "#C71585" },
  { name: "PaleVioletRed", hex: "#DB7093" },
  { name: "LightCoral", hex: "#F08080" },
  { name: "RosyBrown", hex: "#BC8F8F" },
  { name: "IndianRed", hex: "#CD5C5C" },
  { name: "DarkSalmon", hex: "#E9967A" },
  { name: "LightSalmon", hex: "#FFA07A" },
  { name: "DarkOrange", hex: "#FF8C00" },
  { name: "Goldenrod", hex: "#DAA520" },
  { name: "DarkGoldenrod", hex: "#B8860B" },
  { name: "Peru", hex: "#CD853F" },
  { name: "DarkKhaki", hex: "#BDB76B" },
  { name: "LightGoldenrodYellow", hex: "#FAFAD2" },
  { name: "LemonChiffon", hex: "#FFFACD" },
  { name: "LightYellow", hex: "#FFFFE0" },
  { name: "PaleTurquoise", hex: "#AFEEEE" },
  { name: "LightCyan", hex: "#E0FFFF" },
];

export default function App() {
  const [N, setN] = useState(5);
  const [grid, setGrid] = useState(
    Array.from({ length: 5 }, () => Array(5).fill("white")),
  );
  const [selectedColor, setSelectedColor] = useState("white");
  const [paletteColors, setPaletteColors] = useState(generateRandomColors(5));

  // Generate random colors
  function generateRandomColors(num) {
    const shuffled = [...colorOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  // Update grid and palette when N changes
  useEffect(() => {
    setGrid(Array.from({ length: N }, () => Array(N).fill("white")));
    setPaletteColors(generateRandomColors(N));
  }, [N]);

  const handlePaletteClick = (color) => {
    setSelectedColor(color);
  };

  const handleCellHover = (row, col) => {
    const nextGrid = grid.map((currentRow) => [...currentRow]);
    nextGrid[row][col] = selectedColor;
    setGrid(nextGrid);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        gap: "1.5rem",
      }}
    >
      <h1>Color Grid Palette</h1>
      <p style={{ maxWidth: 520 }}>
        Select a color, then hover over the grid to fill cells with that color.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <label htmlFor="grid-size" style={{ fontWeight: 600 }}>
          Enter grid size N:
        </label>
        <input
          id="grid-size"
          type="number"
          value={N}
          onChange={(e) => setN(Math.max(1, parseInt(e.target.value) || 1))}
          min="1"
          style={{
            width: 90,
            padding: "8px 10px",
            borderRadius: 6,
            border: "1px solid #ccc",
            textAlign: "center",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${N}, 60px)`,
          gap: 4,
          justifyContent: "center",
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
          )),
        )}
      </div>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          gap: 12,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {paletteColors.map((color) => (
          <button
            key={color.hex}
            onClick={() => handlePaletteClick(color.hex)}
            style={{
              width: 100,
              height: 50,
              borderRadius: 8,
              border:
                selectedColor === color.hex
                  ? "3px solid #333"
                  : "1px solid #666",
              backgroundColor: color.hex,
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,.12)",
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}
