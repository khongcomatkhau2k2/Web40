document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextItem, 3000); // Change item every 3 seconds

  const categoryButtons = document.querySelectorAll(".category-buttons button");
  const productsContainer = document.querySelector(".products");

  const allProducts = {
    all: [
      { name: "Product 1", category: "category1" },
      { name: "Product 2", category: "category1" },
      { name: "Product 3", category: "category2" },
      { name: "Product 4", category: "category2" },
      // Add more products
    ],
    category1: [
      { name: "Product 1", category: "category1" },
      { name: "Product 2", category: "category1" },
      // Add more products
    ],
    category2: [
      { name: "Product 3", category: "category2" },
      { name: "Product 4", category: "category2" },
      // Add more products
    ],
  };

  function displayProducts(category) {
    productsContainer.innerHTML = "";
    allProducts[category].forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product-item");
      productDiv.textContent = product.name;
      productsContainer.appendChild(productDiv);
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      displayProducts(button.dataset.category);
    });
  });

  // Display all products by default
  displayProducts("all");
});
