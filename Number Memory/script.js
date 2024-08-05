const parent = document.querySelector(".number-memory-test");

if (parent) {
  console.log("number-memory-test div found.");

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          const target = node.childNodes[0];
          if (target.classList.contains("big-number")) {
            console.log(target.textContent);
            // Additional logic can be added here
          } else {
            const btn = target.querySelector(".css-de05nr.e19owgy710");
            const input = target.querySelector("input[pattern]");
            console.log(btn, input);
          }
        });
      }
    }
  });

  // Start observing the target node for configured mutations
  observer.observe(parent, { childList: true, subtree: true });
  console.log("MutationObserver is now observing the number-memory-test div.");
} else {
  console.error('Element with class "number-memory-test" not found.');
}
