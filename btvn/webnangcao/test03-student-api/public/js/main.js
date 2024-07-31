// Lấy thông tin user
function getUsers() {
  // Hàm getUsers để lấy danh sách người dùng
  return axios.get("/users").then(function (response) {
    // Thực hiện một yêu cầu HTTP GET tới URL "/users"
    // Khi yêu cầu hoàn thành thành công, hàm then được gọi với tham số response
    return response.data;
    // Trả về dữ liệu từ phản hồi của yêu cầu (response.data)
  });
}

function deleteUserById(id) {
  // Hàm deleteUserById nhận vào một tham số id
  return axios.delete("/users/" + id);
  // Thực hiện một yêu cầu HTTP DELETE tới URL "/users/" + id
  // Trả về một Promise từ axios.delete
}

function removeTableRowByUserId(id) {
  // Hàm removeTableRowByUserId nhận vào một tham số id
  $(`[data-id="${id}"]`).remove();
  // Tìm hàng trong bảng có thuộc tính data-id bằng với id và xóa nó
}

function handleDelete(id) {
  // Hàm handleDelete nhận vào một tham số id
  if (confirm("Xóa nhé?")) {
    // Hiển thị hộp thoại xác nhận với thông điệp "Xóa nhé?"
    // Nếu người dùng nhấn "OK", tiếp tục với việc xóa người dùng
    deleteUserById(id).then(function () {
      // Gọi hàm deleteUserById với tham số là id
      // Sử dụng then để đăng ký một hàm xử lý, hàm này sẽ được gọi khi deleteUserById hoàn thành thành công
      removeTableRowByUserId(id);
      // Gọi hàm removeTableRowByUserId để xóa hàng trong bảng có id tương ứng
    });
  }
}

// Hiển thị danh sách user
function renderUserList(users) {
  // Hàm renderUserList nhận vào một danh sách người dùng (users)
  users.forEach(function (user) {
    // Duyệt qua mỗi người dùng trong danh sách
    $(`
      <tr data-id="${user.id}">
        <td>${user.name}</td>
        <td>${user.birthday}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>
          <a href="/edit.html?id=${user.id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
          |
          <a class="btn-remove text-danger"><i class="fa fa-trash-alt"></i> Xóa</a>
        </td>
      </tr>
      `)
      // Tạo một hàng bảng mới với thông tin của người dùng
      .find(".btn-remove")
      // Tìm phần tử có lớp "btn-remove" (nút xóa)
      .click(function () {
        // Gán sự kiện click cho nút xóa
        handleDelete(user.id);
        // Khi nút xóa được nhấn, gọi hàm handleDelete với id của người dùng
      })
      .end()
      // Kết thúc tìm kiếm và quay lại phần tử gốc
      .prependTo("tbody");
    // Thêm hàng bảng mới vào đầu của phần tử tbody
  });
}

$(function () {
  // Sử dụng jQuery để thiết lập một hàm xử lý sự kiện khi tài liệu (DOM) đã sẵn sàng
  getUsers().then(renderUserList);
  // Gọi hàm getUsers để lấy danh sách người dùng
  // Sử dụng then để đăng ký hàm renderUserList, hàm này sẽ được gọi khi getUsers hoàn thành thành công
});
