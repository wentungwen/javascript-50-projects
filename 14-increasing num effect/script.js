const counter = document.querySelectorAll(".counter");

// 將updateCounter存在物件中，再呼叫物件
counter.forEach((e) => {
  e.innerText = "0";
  var num = e.getAttribute("data-target");

  var updateCounter = () => {
    var increment = +num / 200;
    var c = +e.innerText;

    if (c < +num) {
      e.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      //   c = +num;
    }
  };
  updateCounter();
});

// 直接在updateCounter裡面呼叫function

// counter.forEach((e) => {
//   e.innerText = "0";
//   var num = e.getAttribute("data-target");

//   function updateCounter() {
//     var increment = +num / 200;
//     var c = +e.innerText;
//     console.log(+num, c, increment);

//     if (c < +num) {
//       e.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 10);
//     } else {
//       //   c = +num;
//     }
//   }
//   updateCounter();
// });
