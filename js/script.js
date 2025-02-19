const addForm = document.getElementById("addForm");
const cdTemplate = document.querySelector("template").content;
const main = document.querySelector("main");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;

  const clone = cdTemplate.cloneNode(true);
  clone.querySelector("h2:nth-of-type(1)").textContent = `Author: ${author}`;
  clone.querySelector("h2:nth-of-type(2)").textContent = `Title: ${title}`;
  clone.querySelector("h2:nth-of-type(3)").textContent = `Year: ${year}`;

  clone.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.target.closest(".cd").remove();
  });

  main.appendChild(clone);
  addForm.reset();
});
