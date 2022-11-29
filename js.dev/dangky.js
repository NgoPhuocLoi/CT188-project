function checkForm(e) {
  e.preventDefault();

  let email = document.getElementById("email");
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailReg.test(email.value) == false) {
    alert("Email không hợp lệ! Vui lòng nhập lại email!");
    return false;
  }
  // Xử lý Email

  let pwd1 = document.getElementById("password");
  if (pwd1.value.length < 8) {
    /*mã xử lý dữ liệu không hợp lệ*/
    alert("Nhập lại password!");
    return false;
  }
  let pwd2 = document.getElementById("password1");
  if (pwd2.value.length < 8) {
    /*mã xử lý dữ liệu không hợp lệ*/
    alert("Nhập lại password!");
    return false;
  }
  if (pwd2.value != pwd1.value) {
    alert("Nhập sai password! Nhập lai");
    return false;
  }
  alert("Đã gửi dữ liệu");
  return true;
}

const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", checkForm);
