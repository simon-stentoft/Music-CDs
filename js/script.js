const addForm = document.getElementById("addForm");

addForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // The form inputs in the HTML need name attributes to be able to access their values

  /* Using this method instead of e.target
  const author = this.author.value;
  const title = this.title.value;
  const year = this.year.value;
  */
  const author = e.target.author.value.trim(); //using trim() so input cant be empty
  const title = e.target.title.value.trim();
  const year = e.target.year.value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${author}</td>
    <td>${title}</td>
    <td>${year}</td>
    <td><button class="deleteBtn"></button></td>
  `;

  row.querySelector(".deleteBtn").addEventListener("click", function (e) {
    e.target.closest("tr").remove();
  });

  const cdTable = document.getElementById("cdTable");
  cdTable.appendChild(row);

  // Reset the form after submission
  this.reset();
});
