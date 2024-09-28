//Sản phẩm (đang fix cứng)
function PostItem() {
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
          <div className="card h-100">
            {/* Góc Sale bên trái */}
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            {/* Ảnh sản phẩm */}
            <img
              className="card-img-top"
              src="https://via.placeholder.com/450x300"
              alt="Product image"
            />
            {/* Chi tiết sản phẩm */}
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Special Item</h5>
                {/* Đánh giá sản phẩm */}
                <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                  <div className="bi-star-fill"></div>
                </div>
                {/* Giá sản phẩm */}
                <span className="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </div>
            </div>
            {/* Thêm vào giỏ */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                <a className="btn btn-outline-dark mt-auto" href="#">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//main.js
const ShopPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {" "}
        {/* Navbar với các lớp Bootstrap */}
        <div className="container px-4 px-lg-5">
          {" "}
          {/* Container với padding cho các kích thước màn hình khác nhau */}
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>{" "}
          {/* Logo hoặc tên thương hiệu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            {/* Nút để điều chỉnh hiển thị navbar trên màn hình nhỏ */}
            <span className="navbar-toggler-icon"></span>{" "}
            {/* Biểu tượng của nút điều chỉnh */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {" "}
            {/* Phần menu sẽ được thu gọn */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {" "}
              {/* Danh sách các mục menu */}
              <li className="nav-item">
                {" "}
                {/* Mục menu đầu tiên */}
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>{" "}
                {/* Liên kết đến trang chính */}
              </li>
              <li className="nav-item">
                {" "}
                {/* Mục menu thứ hai */}
                <a className="nav-link" href="#!">
                  About
                </a>{" "}
                {/* Liên kết đến trang giới thiệu */}
              </li>
              <li className="nav-item dropdown">
                {" "}
                {/* Mục menu có dropdown */}
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>{" "}
                {/* Liên kết cho dropdown */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {" "}
                  {/* Menu dropdown */}
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>{" "}
                  {/* Liên kết đến tất cả sản phẩm */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>{" "}
                  {/* Đường kẻ phân cách */}
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>{" "}
                  {/* Liên kết đến các mặt hàng phổ biến */}
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>{" "}
                  {/* Liên kết đến sản phẩm mới */}
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              {" "}
              {/* Form tìm kiếm hoặc thao tác khác */}
              <button className="btn btn-outline-dark" type="submit">
                {" "}
                {/* Nút giỏ hàng */}
                <i className="bi-cart-fill me-1"></i>{" "}
                {/* Biểu tượng giỏ hàng */}
                Cart {/* Văn bản hiển thị trên nút */}
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>{" "}
                {/* Đếm số lượng sản phẩm trong giỏ hàng */}
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      {/*Body gồm Danh sách sản phẩm */}
      <section className="py-5">
        <PostItem />
        <PostItem />
        <PostItem />
      </section>

      {/* Footer với padding trên và dưới, nền tối */}
      <footer className="py-5 bg-dark">
        {" "}
        <div className="container">
          {" "}
          {/* Container để căn giữa nội dung */}
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>{" "}
          {/* Văn bản căn giữa và màu trắng */}
        </div>
      </footer>
    </div>
  );
};

// index.js
// Render React component vào #root
ReactDOM.render(<ShopPage />, document.getElementById("root"));
