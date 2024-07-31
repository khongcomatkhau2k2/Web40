function getUserIdFromUrl() {
  // Hàm getUserIdFromUrl để lấy id người dùng từ URL
  const url = new URL(window.location.href);
  // Tạo một đối tượng URL từ URL hiện tại của trang

  return url.searchParams.get("id");
  // Trả về giá trị của tham số truy vấn "id" từ URL
}

function validateForm(data) {
  // Hàm validateForm nhận vào một tham số data
  // TODO: Validate
  // TODO: Chưa có phần thân, cần thêm mã kiểm tra tính hợp lệ của dữ liệu form
}

function getUserDataFromForm() {
  // Hàm getUserDataFromForm để lấy dữ liệu người dùng từ form
  const name = $("#name").val();
  // Lấy giá trị của phần tử có id "name" và lưu vào biến name
  const birthday = $("#birthday").val();
  // Lấy giá trị của phần tử có id "birthday" và lưu vào biến birthday
  const email = $("#email").val();
  // Lấy giá trị của phần tử có id "email" và lưu vào biến email
  const phone = $("#phone").val();
  // Lấy giá trị của phần tử có id "phone" và lưu vào biến phone

  return { name, birthday, email, phone };
  // Trả về một đối tượng chứa các dữ liệu người dùng đã lấy được
}

function backToHomepage() {
  // Hàm backToHomepage để chuyển hướng về trang chủ
  window.location.href = "/";
  // Chuyển hướng trình duyệt đến URL "/"
}
