const addForm = document.getElementById("addForm");
const cdTable = document.getElementById("cdTable").querySelector("tbody");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${author}</td>
    <td>${title}</td>
    <td>${year}</td>
    <td><button class="deleteBtn"></button></td>
  `;

  row.querySelector(".deleteBtn").addEventListener("click", (e) => {
    e.target.closest("tr").remove();
  });

  cdTable.appendChild(row);
  addForm.reset();
});
