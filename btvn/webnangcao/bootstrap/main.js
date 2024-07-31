function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginBtn").classList.add("active");
  document.getElementById("registerBtn").classList.remove("active");
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("loginBtn").classList.remove("active");
  document.getElementById("registerBtn").classList.add("active");
}

function forgotPassword() {
  alert("Vui lòng liên hệ hỗ trợ khách hàng để khôi phục mật khẩu.");
}

function loginWithFacebook() {
  alert("Đang đăng nhập bằng Facebook...");
}

function loginWithGoogle() {
  alert("Đang đăng nhập bằng Google...");
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  alert(`Đăng nhập với email: ${email} và mật khẩu: ${password}`);
  // Xử lý đăng nhập tại đây
}


function handleRegister(event) {
  event.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const displayName = document.getElementById("displayName").value;
  const email = document.getElementById("registerEmail").value;
  const genderCheck = document.getElementById("genderCheck").checked;
  alert(
    `Đăng ký với tên đăng nhập: ${username}, mật khẩu: ${password}, email: ${email}, tên hiển thị: ${displayName}, giới tính: ${genderCheck}`
  );
  // Xử lý đăng ký tại đây
}
