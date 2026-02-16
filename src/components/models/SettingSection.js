import React, { useState } from "react";
import "./style/settingSection.css";

export const SettingSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [gridSize, setGridSize] = useState("Medium");

  const handleSave = () => {
    console.log("Dark Mode:", darkMode);
    console.log("Grid Size:", gridSize);
  };

  return (
    <div className="SettingsOverlay">
      <div className="SettingsModal">
        <h1>Settings</h1>

        {/* Dark Mode Toggle */}
        <div className="SettingsItem">
          <label>Dark Mode</label>

          <label className="toggleSwitch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Grid Size */}
        <div className="SettingsItem">
          <label>Grid Size</label>
          <select
            value={gridSize}
            onChange={(e) => setGridSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};
