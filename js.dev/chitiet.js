// Modal
function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
  console.log(slideIndex);
}
// Test Character Generator

const avatar1 = document.querySelector(".avatar");
const charred = avatar1.dataset.label.charCodeAt(0);
const chargreen = avatar1.dataset.label.charCodeAt(0) || charred;
// Cho van de ve contrast
const red = charred ** 3 % 200;
const green = chargreen ** 3 % 200;
const blue = (red + green) % 200;
avatar1.style.background = `rgb(${red},${green},${blue}`;
