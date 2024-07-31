// 1.
// cach1:
// function addElementLi() {
//   const list = document.getElementById("list");

//   const items = ["Item 8", "Item 9", "Item 10"];

//   items.forEach((item) => {
//     // Tạo thẻ li mới
//     const li = document.createElement("li");
//     //  nội dung thẻ li
//     li.textContent = item;
//     // thêm thẻ li vào cuối danh sách
//     list.appendChild(li);
//   });
// }

//c2 dùng vòng lặp
function addElementLi() {
  const listEl = document.querySelector("#list");

  for (let i = 0; i < 3; i++) {
    listEl.insertAdjacentHTML(
      "beforeend",
      `<li>Item ${listEl.children.length + 1}</li>`
    );
  }
}

//2.
function changeColor() {
  const firstLiEl = document.querySelector("li:nth-child(1)");

  firstLiEl.style.color = "red";
}
//3.
function changebgrColor() {
  const firstLiEl = document.querySelector("li:nth-child(3)");

  firstLiEl.style.backgroundColor = "blue";
}
//4.
function removeLi() {
  const firstLiEl = document.querySelector("li:nth-child(4)");
  firstLiEl.remove();
}
//5.
function addLi() {
  const fourthLiEl = document.querySelector("li:nth-child(4)");
  if (fourthLiEl) {
    fourthLiEl.insertAdjacentHTML("beforebegin", `<li>Hi moi nguoi</li>`);
  } else {
    console.error("Không tìm thấy phần tử <li> thứ 4");
  }
}

//6.
function addItem() {
  const inputEl = document.getElementById("inputText");
  const text = inputEl.value;
  if (text.trim().length === 0) {
    return;
  }
  const listEl = document.querySelector("#list");
  listEl.insertAdjacentHTML("beforeend", `<li>${text}</li>`);
  inputEl.value = "";
}
//7.
function removeLastItem() {
  const listEl = document.querySelector("#list");
  //lay phan tu con cuoi cung cua thang cha(listEl)
  const lastItemChild = listEl.lastElementChild;
  if (lastItemChild) lastItemChild.remove();
}

//8.
function toggleList() {
  const listEl = document.querySelector("#list");
  // Đoạn mã này thực hiện việc gán giá trị ngược lại của listEl.hidden cho chính nó.
  // Nếu listEl.hidden đang là true, thì sẽ gán false vào listEl.hidden,
  // và ngược lại.Kết quả là, phần tử listEl sẽ thay đổi trạng thái hiển thị của nó(ẩn hoặc hiển thị).
  listEl.hidden = !listEl.hidden;
  if (listEl.hidden) {
    e.target.textContent = "Hiển thị list";
  } else {
    e.target.textContent = "Ẩn list";
  }
}
