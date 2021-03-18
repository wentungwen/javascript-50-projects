const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const notifications = ["message1", "message2", "message3", "message4"];
const colors = ["green", "red", "yellow", "blue"];
btn.addEventListener("click", () => {
  var toastDiv = document.createElement("div");
  toastDiv.classList.add("toast");
  toastDiv.innerText = `${addRamdon()}`;
  toastDiv.style.color = `${colors[Math.floor(Math.random() * 4)]}`;
  toasts.appendChild(toastDiv);

  setTimeout(() => {
    toastDiv.style.display = "none";
  }, 3000);
});

function addRamdon() {
  var num = Math.floor(Math.random() * 4);
  return notifications[num];
}
