const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const sizeText = document.getElementById("size");
const getColor = document.getElementById("color");
const clearCanvas=document.getElementById('clear')

let size = 20;
let color = "black";
let x;
let y;
let is_pressed = false;

canvas.addEventListener("mousedown", (e) => {
  is_pressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y);
});
canvas.addEventListener("mouseup", (e) => {
  is_pressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (is_pressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    draw_line(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function draw_line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

increase.addEventListener("click", () => {
  if (size < 100) {
    size += 5;
    sizeText.innerText = `${size}`;
  } else {
    alert("maximun!");
  }
});

decrease.addEventListener("click", () => {
  if (size > 0) {
    size -= 5;
    sizeText.innerText = `${size}`;
  } else {
    alert("minimun!");
  }
});

getColor.addEventListener("change", (e) => {
  var newColor = e.target.value;
  color=newColor
});

clearCanvas.addEventListener("click",()=>{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
