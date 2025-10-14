// Toggle mobile navbar
function toggleMenu() {
  document.querySelector(".navbar").classList.toggle("active");
}

// Toggle dropdowns in mobile
document.querySelectorAll(".nav-item-dropdown > a").forEach(dropdownToggle => {
  dropdownToggle.addEventListener("click", function (e) {
    if (window.innerWidth <= 992) {  // only in mobile
      e.preventDefault(); // prevent going to link
      let dropdown = this.nextElementSibling;
      dropdown.classList.toggle("show");
    }
  });
});



const banner = document.querySelector(".banner");

// ✅ Make sure your images are in the correct folder (usually `images/`)
const images = [
  "./imges/bannar.jpg",
  "./images/banner2.jpg",
  "./imges/bannar.jpg",
  "./images/banner4.jpg",
  "./imges/bannar.jpg"
];

let slideIndex = 0;

function showSlide(index) {
  banner.style.backgroundImage = `url('${images[index]}')`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + images.length) % images.length;
  showSlide(slideIndex);
}

// Auto change every 5s
setInterval(nextSlide, 5000);

// Show first image
showSlide(slideIndex);
