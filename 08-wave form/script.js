const labels = document.querySelectorAll(".form-control label");

//  innerHTML包含所有標籤資訊，innertext只有文字
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
