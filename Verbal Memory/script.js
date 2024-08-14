function Verbal_Memory() {
  const cache = [];
  const word = document.querySelector(".word");
  const target = document.querySelector(".verbal-memory-test");
  const seenBtn = document.querySelectorAll(".css-de05nr.e19owgy710")[0];
  const newBtn = document.querySelectorAll(".css-de05nr.e19owgy710")[1];

  console.log("hey");
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        // if (word in cache) {
        //   // seenBtn.click();
        // } else {
        //   cache.push(word);
        //   // newBtn.click();
        // }
      }
    }
  });

  observer.observe(target, {
    childList: true,
    characterData: true,
    subtree: true,
  });
}

Verbal_Memory();
