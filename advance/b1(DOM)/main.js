console.log(window); //globalThis
console.log(document); // đại diện cho cấu trúc nội dung
console.log(document.head); // đại diện cho cấu trúc nội dung trong thẻ head
console.log(document.body); // đại diện cho cấu trúc nội dung trong thẻ body
document.designMode = "off";
document.title = "Tiêu đề mới web";

console.log(`Test:`);
// Tìm kiếm nội dung
// hiện ra dòng h1
//
const headingElement = document.querySelector(`h1`);
console.log(headingElement);

console.log(headingElement);
console.log(headingElement.innerHTML); // cho phép lấy và thay thế cấu trúc html bên trong
console.log(headingElement.innerText); // lấy và thay đổi văn bản bên trong element(phần tử html)
console.log(headingElement.textContent); //chỉ thay thế nội dung vb
console.log(headingElement.outerHTML); //lấy hoặc thiết lập toàn bộ HTML của phần tử, bao gồm cả chính phần tử đó.
// vd về outerHTMl: <div id="myDiv">Nội dung <span>bên trong</span> phần tử</div>
// let content = document.getElementById('myDiv').outerHTML;
// console.log(content); // Sẽ in ra: <div id="myDiv">Nội dung <span>bên trong</span> phần tử</div>
console.log(headingElement.outerText); //Tương tự như innerText, nhưng khi được thiết lập, nó sẽ thay thế toàn bộ phần tử với văn bản mới.

// hiện ra cả 2 dòng (nó sẽ hiện notelist)
const allheadingElement = document.querySelectorAll(`h1, h2`);
console.log(allheadingElement);
// Chỉnh sửa nội dung(thêm,sửa,xóa)
// Xử lý các sự kiện
headingElement.innerHTML =
  "Hello <span style= 'color:green;'>JavaScript</span>";
headingElement.id = "heading";
headingElement.className = "heading";
headingElement.title = "Đây là tiêu đề";
headingElement.lang = "en";

console.log(headingElement.attributes.class.value);
headingElement.getAttribute("class");
headingElement.setAttribute("class", "heading red - heading");
//kiểm tra xem có id không, có ra true
console.log(headingElement.hasAttribute("id"));
//xóa thuộc tính id
headingElement.removeAttribute("id");
//vì đã xóa nên ra false
console.log(headingElement.hasAttribute("id"));

//inline css
//tên thuộc tính viết dạng camelCase
// border => border
// background-color => backgroundColor

headingElement.style.backgroundColor = "yellow";
headingElement.style.cssText = `
border : 1px solid red;
border-radius : 5px;
padding: 10px;
`;

// Class
headingElement.classList.add("red-heading");
