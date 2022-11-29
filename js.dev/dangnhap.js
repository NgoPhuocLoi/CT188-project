function showHide() {
  let password = document.getElementById("password");
  let eyeOpen = document.getElementById("eyeOpen");
  let eyeClose = document.getElementById("eyeClose");
  if (password.type === "password") {
    password.setAttribute("type", "text");
    eyeOpen.classList.add("hide");
    eyeClose.classList.remove("hide");
  } else {
    password.setAttribute("type", "password");
    eyeOpen.classList.remove("hide");
    eyeClose.classList.add("hide");
  }
}

function checkForm(e) {
  e.preventDefault();
  let email = document.getElementById("email");
  let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailReg.test(email.value) == false) {
    alert("Email không hợp lệ! Vui lòng nhập lại Email");
    email.focus();
    return false;
  }
  console.log(1112);
  let password = document.getElementById("password");
  if (password.value.length < 8) {
    alert("Mật khẩu không hợp lệ");

    return false;
  }

  const users = JSON.parse(localStorage.getItem("users"));
  const currentUser = users.find((user) => user.email === email.value);

  if (!currentUser) {
    alert("Email không tồn tại, vui lòng thử lại!");
    return false;
  }

  if (currentUser.password !== password.value) {
    alert("Mật khẩu không đúng");
    return false;
  }

  alert("Đăng nhập thành công");
  localStorage.setItem("isAuthorized", true);
  window.location.href = "trangchu.html";
  return true;
}

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", checkForm);
