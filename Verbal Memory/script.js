const cache = [];

function Verbal_Memory() {
  const word = document.querySelector(".word").textContent;
  const seenBtn = document.querySelectorAll(".css-de05nr.e19owgy710")[0];
  const newBtn = document.querySelectorAll(".css-de05nr.e19owgy710")[1];

  if (cache.includes(word)) {
    console.log("found");
    seenBtn.click();
  } else {
    console.log("not found");
    cache.push(word);
    newBtn.click();
  }
}

setInterval(() => {
  Verbal_Memory();
}, 2000);
