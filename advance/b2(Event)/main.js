 function changeName() {
  const name = document.querySelector(".name");
  name.textContent = "Hoa";
}
function showFullName() {
  const name = document.querySelector(".name");
  name.textContent = name.textContent + "đẹp trai";
}
function showShortName() {
  const name = document.querySelector(".name");
  name.textContent = name.textContent.replace("đẹp trai", " ");
}
// Đoạn mã này tạo ra một màu sắc ngẫu nhiên
// và gán màu đó cho thuộc tính color của phần tử colorText.
//Màu sắc được tạo bằng cách lấy một số ngẫu nhiên từ 0 đến 16777214,
//chuyển đổi số đó thành chuỗi hex, đảm bảo chuỗi luôn có độ dài 6 ký tự,
// và thêm dấu # vào đầu chuỗi để tạo ra mã màu hợp lệ.
function addCss() {
  const colorText = document.querySelector(".name");
  colorText.style.color =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0"); //padstart để cho mã màu có 6 số
}

function setupCounter() {
  const allCounter = document.querySelectorAll(".counter");
  allCounter.forEach(function (counter) {
    const minus = counter.querySelector(".minus");
    const plus = counter.querySelector(".plus");
    const value = counter.querySelector("span");

    const min = parseInt(counter.getAttribute("data-min"));
    const max = parseInt(counter.getAttribute("data-max"));

    // Đoạn mã này được sử dụng để giảm giá trị của một bộ đếm khi người dùng nhấp vào một nút.
    minus.addEventListener("click", function () {
      const current = parseInt(value.textContent);
      if (current > min) {
        value.textContent = current - 1;
      }
    });

    // Đoạn mã này được sử dụng để tăng giá trị của một bộ đếm khi người dùng nhấp vào một nút.
    plus.addEventListener("click", function (e) {
      console.log(e);
      const current = parseInt(value.textContent);
      if (current < max) {
        value.textContent = current + 1;
      }
    });
  });
}

setupCounter();

//phần này cách đoạn trên
// Thêm sự kiện click cho thẻ <a>
document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault(); // Ngăn sự kiện mặc định (chuyển hướng)
  e.stopPropagation(); // Ngăn sự kiện lan truyền đi
  console.log("Click vào thẻ a");
  console.log(e.target);
  console.log("Không chuyển hướng nữa");
});

// Thêm sự kiện click cho body
document.body.addEventListener("click", function (e) {
  console.log("Click vào body");
  console.log(e.target);
});

// Thêm sự kiện click cho document
document.addEventListener("click", function (e) {
  console.log("Click vào vị trí bất kì trên document");
  console.log(e.target);
});

//trong addEventListener(event,callback)

// tạo ra 1 hình tròn khi click chuột bất kì(phải sang cả css)
function showCircle(e) {
  const prev = document.querySelector(".circle");
  if (prev) prev.remove();
  const x = e.clientX;
  const y = e.clientY;
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 15}px`;
  circle.style.top = `${y - 15}px`;
  document.body.append(circle);
}
document.addEventListener("click", showCircle);

//b1 keyboart
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  document.addEventListener("keydown", function (e) {
    // Ngăn sự kiện mặc định của phím nếu cần thiết
    e.preventDefault();

    // Xác định phím được nhấn
    switch (e.key) {
      case "Enter":
        createCircle();
        break;
      case " ":
        createSquare();
        break;
      default:
        changeBackgroundColor();
        break;
    }
  });

  function createCircle() {
    // Tạo hình tròn
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Đặt vị trí ngẫu nhiên trên trang
    setPosition(circle);

    // Thêm hình tròn vào body
    body.appendChild(circle);
  }

  function createSquare() {
    // Tạo hình vuông
    const square = document.createElement("div");
    square.classList.add("square");

    // Đặt vị trí ngẫu nhiên trên trang
    setPosition(square);

    // Thêm hình vuông vào body
    body.appendChild(square);
  }

  function changeBackgroundColor() {
    // Đổi màu nền của trang thành màu ngẫu nhiên
    const colors = ["#FF5733", "#3498DB", "#27AE60", "#9B59B6", "#F39C12"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  }

  function setPosition(element) {
    // Đặt vị trí ngẫu nhiên cho phần tử trên trang
    const maxX = window.innerWidth - 50; // 50 là kích thước của phần tử
    const maxY = window.innerHeight - 50;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
  }
});
