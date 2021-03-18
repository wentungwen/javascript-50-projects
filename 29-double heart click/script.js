const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");

let clickme = 0;
let count = 1;
loveMe.addEventListener("click", (e) => {
  if (clickme === 0) {
    clickme = new Date().getTime();
  } else {
    if (new Date().getTime() - clickme < 300) {
      createHeart(e);
      clickme = 0;
    } else {
      clickme = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fa");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;
  //   console.log(x, y);

  const topOffset = e.target.offsetTop;
  const leftOffset = e.target.offsetLeft;
  console.log(topOffset, leftOffset);

  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  //   console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart);

  times.innerText = `${count++}`;
};
