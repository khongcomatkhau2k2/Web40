// let dish;

// function thinking() {
//   setTimeout(function () {
//     dish = "Cua hoàng đế";
//   }, 3000);
// }

// function show() {
//   setTimeout(function () {
//     document.querySelector(".dish").textContent = dish;
//   }, 4000);
// }

// thinking();
// show();

//học then, catch, finally (bắt tín hiệu)
// then bắt tín hiệu khi thành công
// catch bắt tín hiệu khi thất bại
//(nếu 1 trong 2 thằng là then hoặc catch được bắt tín hiệu thì thằng finally đều được gọi)

// Gọi API - Call API

// fetchAPI :cho phép gửi yc của mình đến api 1 sever nào đó

fetch(`https://dummyjson.com/products`) // lấy dữ liệu từ link json này về
  .then(function (response) {
    return response.json(); //response.json() cũng là 1 promise
  })
  .then(function (json) {
    //then này là bắt tín hiệu của thằng then trước
    renderProducts(json);
  });

function renderProducts(products) {
  products.forEach((product) => {
    const productName = product.title;
    const productPrice = product.price;
    const productImage = product.thumbnail;

    //   viết kiểu jQuery
    $(`<div class="product>
        <img src="${productImage}" alt="${productName}">
        <h3>${productName}</h3>
        <p>${productPrice}</p>
        </div>`);
  });
}
