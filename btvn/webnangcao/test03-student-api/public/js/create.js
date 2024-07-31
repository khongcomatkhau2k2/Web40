function saveUser(user) {
  // Hàm saveUser nhận vào một đối tượng user làm tham số
  return axios.post("/users", user);
  // Thực hiện một yêu cầu HTTP POST tới URL "/users", gửi đối tượng user làm dữ liệu
  // Trả về một Promise từ axios.post
}

function handleSaveUser() {
  // Hàm handleSaveUser để xử lý sự kiện lưu người dùng
  const data = getUserDataFromForm();
  // Gọi hàm getUserDataFromForm để lấy dữ liệu người dùng từ form và lưu vào biến data

  saveUser(data).then(backToHomepage);
  // Gọi hàm saveUser với tham số là dữ liệu người dùng (data)
  // Sử dụng then để đăng ký một hàm xử lý (backToHomepage) sẽ được gọi khi saveUser hoàn thành thành công
}

$(function () {
  // Sử dụng jQuery để thiết lập một hàm xử lý sự kiện khi tài liệu (DOM) đã sẵn sàng
  $("#btn-save").click(handleSaveUser);
  // Tìm phần tử có id "btn-save" và gán sự kiện click cho nó
  // Khi người dùng nhấp vào nút #btn-save, hàm handleSaveUser sẽ được gọi
});
