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
