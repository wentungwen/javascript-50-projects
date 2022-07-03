const cups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percent = document.getElementById("percentage");
const remained = document.getElementById("remained");

cups.forEach((cup, idx) => {
  cup.addEventListener("click", () => {
    hightlight(idx);
  });
});

function hightlight(idx) {
  if (
    cups[idx].classList.contains("full") &&
    !cups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  cups.forEach((cup, index) => {
    if (index <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updatebigcup();
}

function updatebigcup() {
  const fullGlass = document.querySelectorAll(".cup.full").length;

  percent.style.flex = `${fullGlass}`;
  remained.style.flex = `${8 - fullGlass}`;
  liters.innerText = `${1.5 - (1.5 * (fullGlass * 12.5)) / 100}L`;
  percent.innerText = `${fullGlass * 12.5}%`;

  if (fullGlass === 8) {
    liters.style.visibility = "hidden";
    remained.style.visibility = "hidden";
  } else if (fullGlass === 0) {
    remained.style.visibility = "hidden";
    percent.style.visibility = "hidden";
  } else {
    liters.style.visibility = "initial";
    remained.style.visibility = "initial";
  }
}
