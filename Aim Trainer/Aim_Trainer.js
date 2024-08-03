function Aim_Trainer() {
  const target = document.querySelector(".css-1k4dpwl.e6yfngs0");

  const mouseDownEvent = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  setInterval(() => {
    target.children[0].dispatchEvent(mouseDownEvent);
  }, 1);
}

Aim_Trainer();
