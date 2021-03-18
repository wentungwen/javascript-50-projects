const downButtonR = document.querySelector(".down-button");
const upButtonL = document.querySelector(".up-button");
const right = document.querySelector(".right-slide");
const left = document.querySelector(".left-slide");
const sliderContainer = document.querySelector(".slider-container");
const totalLength = document.querySelectorAll(".right-slide div").length;
var currentIndex = 0;

downButtonR.addEventListener("click", () => changeSlider("down"));
upButtonL.addEventListener("click", () => changeSlider("up"));

right.style.top = `${-100 * currentIndex}vh`;
left.style.top = `${-100 * (totalLength - currentIndex - 1)}vh`;

function changeSlider(e) {
  const sliderHeight = sliderContainer.clientHeight;
  if (e === "down") {
    currentIndex++;
    if (currentIndex > totalLength - 1) {
      currentIndex = 0;
    }
  } else if (e === "up") {
    currentIndex--;
    if (currentIndex <= 0) {
      currentIndex = totalLength - 1;
    }
  }
  left.style.top = `${-100 * currentIndex}vh`;
  right.style.top = `${-100 * (totalLength - currentIndex - 1)}vh`;
}
