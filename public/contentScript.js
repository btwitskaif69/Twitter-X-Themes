chrome.storage.sync.get(["bgColor"], (result) => {
  const bgColor = result.bgColor || "#ffffff";

  const classGroups = [
    // Original + previous additions
    ["r-1p0dtai", "r-1ei5mc7", "r-1pi2tsx", "r-1d2f490", "r-crgep1", "r-orgf3d", "r-t60dpp", "r-u8s1d", "r-zchlnj", "r-ipm5af", "r-13qz1uu"],
    ["css-175oi2r", "r-3pj75a"],
    ["css-175oi2r", "r-1awozwy", "r-6koalj", "r-eqz5dr", "r-16y2uox", "r-1h3ijdo", "r-1777fci", "r-s8bhmr", "r-3pj75a", "r-o7ynqc", "r-6416eg", "r-1ny4l3l", "r-1loqt21"],
    ["css-175oi2r", "r-1awozwy", "r-aqfbo4", "r-kemksi", "r-18u37iz", "r-1h3ijdo", "r-6gpygo", "r-15ysp7h", "r-1xcajam", "r-ipm5af", "r-136ojw6", "r-1jocfgc"],
    ["css-175oi2r", "r-16y2uox", "r-1wbh5a2", "r-1777fci"],
    ["css-175oi2r", "r-18u37iz", "r-1udh08x", "r-1c4vpko", "r-1c7gwzm", "r-o7ynqc", "r-6416eg", "r-1ny4l3l", "r-1loqt21"],
    ["css-175oi2r", "r-1habvwh", "r-1ssbvtb", "r-1mmae3n", "r-3pj75a"],
    ["css-175oi2r", "r-kemksi", "r-1kqtdi0", "r-1867qdf", "r-1phboty", "r-rs99b7", "r-1ifxtd0", "r-1udh08x"],
    ["css-175oi2r", "r-vacyoi", "r-ttdzmv"],
    ["css-175oi2r", "r-lrvibr", "r-1g40b8q", "r-obd0qt", "r-16y2uox"],
    ["css-175oi2r", "r-16y2uox", "r-1wbh5a2", "r-1habvwh"],
    ["css-175oi2r", "r-1oszu61", "r-1niwhzg", "r-18u37iz", "r-16y2uox", "r-2llsf", "r-13qz1uu", "r-1wtj0ep"],
    ["css-175oi2r", "r-1awozwy", "r-aqfbo4", "r-kemksi", "r-18u37iz", "r-1h3ijdo", "r-6gpygo", "r-15ysp7h", "r-1xcajam", "r-ipm5af", "r-136ojw6", "r-1hycxz"],
    ["css-175oi2r", "r-1h8ys4a"],
    ["css-175oi2r", "r-1awozwy", "r-kemksi", "r-18u37iz", "r-1wtj0ep", "r-13qz1uu", "r-184en5c"],

    // ✅ Newly added today
    ["css-175oi2r", "r-kemksi", "r-jumn1c", "r-xd6kpl", "r-gtdqiz", "r-ipm5af", "r-184en5c"],
    ["css-175oi2r", "r-4d76ec"],
    ["css-175oi2r", "r-kemksi", "r-16y2uox", "r-f8sm7e", "r-13qz1uu", "r-1ye8kvj"]
  ];

  const selectors = classGroups.map(group =>
    group.map(cls => `.${cls}`).join("")
  );

  const applyBackground = () => {
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.style.backgroundColor = bgColor;
      });
    });
  };

  applyBackground();

  const observer = new MutationObserver(() => {
    applyBackground();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
