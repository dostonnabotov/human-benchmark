const parent = document.querySelector(".number-memory-test");
let number;

if (parent) {
  console.log("number-memory-test div found.");

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          const target = node.childNodes[0];
          if (target.classList.contains("big-number")) {
            number = target.textContent;
            console.log(number);
            // Additional logic can be added here
          } else {
            const form = target;
            const btn = target.querySelector(".css-de05nr.e19owgy710");
            const input = target.querySelector("input[pattern]");
            // Change the value
            // input.value = number;

            input.focus();

            // Simulate typing each character individually
            input.value = number;

            // Trigger the input event to simulate pasting
            input.dispatchEvent(new Event("input", { bubbles: true }));

            // Optionally, simulate a paste event (if needed)
            const pasteEvent = new ClipboardEvent("paste", {
              clipboardData: new DataTransfer(),
            });
            pasteEvent.clipboardData.setData("text/plain", number);
            input.dispatchEvent(pasteEvent);

            const submitEvent = new Event("submit", {
              bubbles: true,
              cancelable: true,
            });
            form.dispatchEvent(submitEvent);
            // console.log();
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
