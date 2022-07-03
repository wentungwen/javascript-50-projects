const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// 讓他自動focus
textarea.focus();

// 當keyup時，就將textarea中的value進行底下的運算，// createtag
// 每十豪秒清空字串
// 呼叫ramdom選字/ highlight

textarea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    randomSelector();
  }
});

// 先將它用‘,’分開為陣列，刪掉空字串，將全部去除空白，輸出新陣列
function createTag(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tags) => tags.trim());

  tagsEl.innerHTML = "";

  // 將這個陣列tags一個個進行：
  // 增加span，加上tag class，塞進html中
  tags.forEach((tag) => {
    const tagsNode = document.createElement("span");
    tagsNode.classList.add("tag");
    tagsNode.innerText = tag;
    tagsEl.appendChild(tagsNode);
  });
}

function randomSelector() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = PickRandom();

    highlight(randomTag);

    setTimeout(() => {
      unhighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = PickRandom();
      highlight(randomTag);
    }, 100);
  }, 3000);
}

function PickRandom() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unhighlight(tag) {
  tag.classList.remove("highlight");
}
