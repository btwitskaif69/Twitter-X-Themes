// src/App.js
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [linkColor, setLinkColor] = useState("#1DA1F2"); // Default Twitter blue

  const applyTheme = async () => {
    chrome.storage.sync.set({ bgColor, textColor, linkColor });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (bg, text, link) => {
        document.body.style.backgroundColor = bg;
        document.body.style.color = text;

        const linkSelectors = [
          ".css-175oi2r.r-1loqt21.r-tmtnm0.r-2tyz2o.r-1awozwy.r-1777fci.r-u8s1d"
        ];

        linkSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            el.style.color = link;
          });
        });
      },
      args: [bgColor, textColor, linkColor]
    });
  };

  return (
    <div className="p-4 w-[250px] space-y-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Custom Twitter Theme
      </h3>

      <div className="space-y-1">
        <Label htmlFor="bg-color">Background Color</Label>
        <Input
          id="bg-color"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="h-10 w-full p-1"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="text-color">Text Color</Label>
        <Input
          id="text-color"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="h-10 w-full p-1"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="link-color">Link/Hashtag/@Mention Color</Label>
        <Input
          id="link-color"
          type="color"
          value={linkColor}
          onChange={(e) => setLinkColor(e.target.value)}
          className="h-10 w-full p-1"
        />
      </div>

      <Button onClick={applyTheme} className="w-full mt-2">
        Apply Theme
      </Button>
    </div>
  );
}

export default App;
