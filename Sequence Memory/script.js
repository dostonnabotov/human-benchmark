const startButton = document.querySelector(".css-de05nr.e19owgy710");

const mouseDownEvent = new MouseEvent("mousedown", {
  bubbles: true,
  cancelable: true,
  view: window,
});

startButton.addEventListener("mousedown", function () {
  setTimeout(() => {
    const squares = document.querySelectorAll(".square");
    const cache = [];
    let count = 0;

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const targetElement = mutation.target;
          if (targetElement.classList.contains("active")) {
            let index = [...squares].indexOf(targetElement);

            // only add the last added index
            if (count == cache.length) {
              cache.push(index);

              // click the squares after observer ends
              setTimeout(() => {
                for (let i = 0; i < cache.length; i++) {
                  squares[cache[i]].dispatchEvent(mouseDownEvent);
                  count = 0;
                  console.log("clicked");
                }
              }, 1000);
            }
            console.log(cache);
            count++;
          }
        }
      });
    });

    squares.forEach((square) => {
      observer.observe(square, {
        attributes: true, // Observe attribute changes
        attributeFilter: ["class"], // Only observe class attribute
      });
    });
  }, 200);
});
