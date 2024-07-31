function getUserById(id) {
  // Hàm getUserById nhận vào một tham số id
  return axios.get("/users/" + id).then(function (response) {
    // Thực hiện một yêu cầu HTTP GET tới URL "/users/" + id
    // Khi yêu cầu hoàn thành thành công, hàm then được gọi với tham số response
    return response.data;
    // Trả về dữ liệu từ phản hồi của yêu cầu (response.data)
  });
}

function fillUserDataToForm(user) {
  // Hàm fillUserDataToForm nhận vào một đối tượng user làm tham số
  $("#name").val(user.name);
  // Gán giá trị user.name vào phần tử có id "name"
  $("#birthday").val(user.birthday);
  // Gán giá trị user.birthday vào phần tử có id "birthday"
  $("#email").val(user.email);
  // Gán giá trị user.email vào phần tử có id "email"
  $("#phone").val(user.phone);
  // Gán giá trị user.phone vào phần tử có id "phone"
}

function saveUser(user) {
  // Hàm saveUser nhận vào một đối tượng user làm tham số
  return axios.put("/users/" + getUserIdFromUrl(), user);
  // Thực hiện một yêu cầu HTTP PUT tới URL "/users/" + getUserIdFromUrl(), gửi đối tượng user làm dữ liệu
  // Trả về một Promise từ axios.put
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
  const userId = getUserIdFromUrl();
  // Gọi hàm getUserIdFromUrl để lấy id của người dùng từ URL và lưu vào biến userId
  getUserById(userId).then(fillUserDataToForm);
  // Gọi hàm getUserById với tham số là userId
  // Sử dụng then để đăng ký hàm fillUserDataToForm, hàm này sẽ được gọi khi getUserById hoàn thành thành công

  $("#btn-save").click(handleSaveUser);
  // Tìm phần tử có id "btn-save" và gán sự kiện click cho nó
  // Khi người dùng nhấp vào nút #btn-save, hàm handleSaveUser sẽ được gọi
});
