const buttons = document.querySelectorAll(".ripple");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    //   這裡的e是一個mouseEvent
    console.log(e);
    const x = e.clientX;
    const y = e.clientY;
    // (x, y)得出游標位置
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    // (buttonLeft, buttonTop)得出物體離最上/最左的距離

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;
    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";
    this.appendChild(circle);

    // 這裡的this指向=button
    console.log(this);
  });
});
