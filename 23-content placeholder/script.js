const header = document.getElementById("header");
const title = document.getElementById("title");
const profile = document.getElementById("profile");
const excerpt = document.getElementById("excerpt");
const fullName = document.getElementById("name");
const date = document.getElementById("date");

const animationBG = document.querySelectorAll(".animated-bg");
const animationText = document.querySelectorAll(".animated-bg-text");

setTimeout(insertContent, 1000);

function insertContent() {
  title.innerText = "Lorem ipsum dolor sit amet.";
  header.innerHTML = `<img src="https://picsum.photos/400/250" alt="" />`;
  excerpt.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,tempora?`;
  profile.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" /> `;
  fullName.innerText = "John Doe";
  date.innerText = "Oct 08, 2020";

  const BGArr = Array.apply(null, animationBG);
  const TextArr = Array.apply(null, animationText);
  const totalArr = BGArr.concat(TextArr);

  for (i of totalArr) {
    i.classList.remove("animated-bg", "animated-bg-text");
    console.log(i);
  }
}
