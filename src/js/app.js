
// Toggle mobile menu on click

const mobMenu = document.querySelector(".header__mobileMenu");
let mobDropdown = document.querySelector(".mobileDropdown");

mobMenu.addEventListener("click", openMenu);

function openMenu(e) {
  if (mobDropdown.className === "mobileDropdown") {
    mobDropdown.classList.add("active");
  } else {
    mobDropdown.classList.remove("active");
  }
}



