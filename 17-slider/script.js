const body = document.body;
const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");
const sliders = document.querySelectorAll(".slider");

let activeSlideNum = 0;
setBodyBg();

function setBodyBg() {
  body.style.backgroundImage = sliders[activeSlideNum].style.backgroundImage;
}

function setActiveSlide() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
    sliders[activeSlideNum].classList.add("active");
  });
}

rightArrow.addEventListener("click", () => {
  activeSlideNum++;
  if (activeSlideNum > sliders.length - 1) {
    activeSlideNum = 0;
  }
  setBodyBg();
  setActiveSlide();
});

leftArrow.addEventListener("click", () => {
  activeSlideNum--;
  if (activeSlideNum < 0) {
    activeSlideNum = sliders.length - 1;
  }
  setBodyBg();
  setActiveSlide();
});
