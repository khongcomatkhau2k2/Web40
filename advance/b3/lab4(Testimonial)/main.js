//event đơn giản là gắn 1 hàm cho 1 cái sự kiện
const authors = document.querySelector(`.authors`);
document.addEventListener("DOMContentLoaded", function () {
  const users = [
    {
      name: "Ba Nguyễn",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo voluptatem cupiditate id iusto ratione a unde quia molestiae, sit, itaque nam praesentium harum facere libero labore perspiciatis. Id, repellendus.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      color: "red", // ví dụ màu đỏ
    },
    {
      name: "An",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo voluptatem cupiditate id iusto ratione a unde quia molestiae, sit, itaque nam praesentium harum facere libero labore perspiciatis. Id, repellendus.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      color: "yellow",
    },
    {
      name: "Huy",
      quote:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      color: "blue",
    },
    {
      name: "Duc",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "https://randomuser.me/api/portraits/women/76.jpg",
      color: "green",
    },
    {
      name: "Nhi",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "https://randomuser.me/api/portraits/men/17.jpg",
      color: "pink",
    },
  ];

  // màu bgr
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );
  // trích dẫn element
  const quoteElement = testimonialsContainer.querySelector(".text");

  const nameElement = testimonialsContainer.querySelector(".name");
  //tacgia?
  const authors = testimonialsContainer.querySelectorAll(".author");
  // khi kích vào biểu tượng người
  authors.forEach((author, index) => {
    author.addEventListener("click", () => {
      // Xóa lớp 'selected' ở tất cả các author
      authors.forEach((author) => author.classList.remove("selected"));

      // Thêm lớp 'selected' vào author được click
      author.classList.add("selected");

      // Cập nhật nội dung và hình ảnh
      quoteElement.textContent = users[index].quote;
      nameElement.textContent = users[index].name;

      // Cập nhật background tương ứng
      testimonialsContainer.style.background = users[index].color;
    });
  });
});
