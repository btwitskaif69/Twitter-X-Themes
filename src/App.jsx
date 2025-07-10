// src/App.js
import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  const applyTheme = async () => {
    chrome.storage.sync.set({ bgColor, textColor });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (bg, text) => {
        document.body.style.backgroundColor = bg;
        document.body.style.color = text;
      },
      args: [bgColor, textColor]
    });
  };

  return (
    <div style={{ padding: "1rem", width: "250px" }}>
      <h3>Custom Twitter Theme</h3>
      <div>
        <label>Background Color: </label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      </div>
      <div>
        <label>Text Color: </label>
        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
      </div>
      <button onClick={applyTheme} style={{ marginTop: "1rem" }}>Apply</button>
    </div>
  );
}

export default App;
