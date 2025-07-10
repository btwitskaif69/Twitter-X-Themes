chrome.storage.sync.get(["bgColor", "textColor"], (result) => {
  if (result.bgColor) {
    document.body.style.backgroundColor = result.bgColor;
  }
  if (result.textColor) {
    document.body.style.color = result.textColor;
  }
});
