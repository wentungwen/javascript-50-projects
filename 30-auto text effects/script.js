const speedEl = document.getElementById("speed");
const textEl = document.getElementById("text");
const text = "I love javascript!";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();
function writeText() {
  //   let speed = 300 / speedEl.value;
  textEl.innerText = text.slice(0, idx);

  if (idx < text.split("").length) {
    idx++;
  } else {
    idx = 1;
  }
  setTimeout(writeText, speed);
  console.log(speedEl.value);
}

speedEl.addEventListener("change", (e) => {
  speed = 300 / speedEl.value;
});
