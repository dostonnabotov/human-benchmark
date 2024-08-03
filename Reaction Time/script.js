function Reaction_Time() {
  const target = document.querySelector(".e18o0sx0.css-saet2v.e19owgy77");
  const mouseDownEvent = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const newClass = target.classList[0];
        if (newClass === "view-go") {
          target.dispatchEvent(mouseDownEvent);
        }
      }
    }
  });

  observer.observe(target, { attributes: true });
}

Reaction_Time();
