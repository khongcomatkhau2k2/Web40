//1
const table = document.querySelector(`.table`);
table.classList.add("table-bordered");
//2
const addFirstTr = table.querySelector("tr:first-child");
addFirstTr.classList.add("bg-dark");
//3
// tạo hàng mới
const newRow = document.createElement("tr");

// nội dung cho các ô
const cell1 = document.createElement("td");
cell1.textContent = "6"; // stt
newRow.appendChild(cell1);

const cell2 = document.createElement("td");
cell2.textContent = "Sean"; // first
newRow.appendChild(cell2);

const cell3 = document.createElement("td");
cell3.textContent = "Reyes"; // last
newRow.appendChild(cell3);

const cell4 = document.createElement("td");
cell4.textContent = "@sreyes"; // phần @
newRow.appendChild(cell4);

//  hàng mới vào cuối bảng
table.appendChild(newRow);

//4
const thirdRow = table.querySelector("tr:nth-child(4)");
const fourthCol = table.querySelector("td:nth-child(4)");

fourthCol.textContent = "@dixonl";

//5
const secondRow = table.querySelector("tr:nth-child(2)");
const fourthRow = table.querySelector("tr:nth-child(5)");
secondRow.insertAdjacentElement("beforebegin", fourthRow);

for (let i = 1; i < table.rows.length; i++) {
  const row = table.rows[i];
  row.cells[0].textContent = i;
}
//6
for (let i = 1; i < table.rows.length; i++) {
  const row = table.row[i];
  const temp = row.cells[1].textContent;
  row.cells[1].textContent = row.cells[2].textContent;
  row.cells[2].textContent = temp;
}
//7
for (let i = 1; i < table.rows.length; i++){
    const row = table.row[i];
    row.style.backgroundColor = '#fff';
}