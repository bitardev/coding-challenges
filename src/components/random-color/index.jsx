import { useState, useEffect } from "react";
import "./style.css";
const RandomColor = () => {
  const [typeColor, setTypeColor] = useState("");
  const [color, setColor] = useState("");
  const colorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleCreateColorHEX = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    // #FF0001
    let hexColor = "";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[colorUtility(hex.length)];
    }
    setColor(`#${hexColor}`);
  };
  const handleCreateColorRGB = () => {
    // 200, 255, 0
    setColor(
      `rgb(${colorUtility(256)},${colorUtility(256)},${colorUtility(256)})`
    );
  };
  const handleCreateColorRandom = () => {
    if (typeColor === "HEX") handleCreateColorHEX();
    else handleCreateColorRGB();
  };

  useEffect(() => {
    if (typeColor === "HEX") handleCreateColorHEX();
    else handleCreateColorRGB();
  }, [typeColor]);

  return (
    <>
      <div>RandomColor Challenge</div>
      <div className="random-color-container">
        <div className="random-color-container__buttons">
          <button onClick={() => setTypeColor("HEX")}>Create HEX Color</button>
          <button onClick={() => setTypeColor("RGB")}>Create RGB Color</button>
          <button onClick={handleCreateColorRandom}>
            Generate Random Color
          </button>
        </div>
        <div
          className="random-color-container__generated-color"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      </div>
    </>
  );
};
export default RandomColor;
