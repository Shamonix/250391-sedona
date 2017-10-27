var toggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menu.classList.contains("main-nav--closed")) {
    menu.classList.remove("main-nav--closed");
    menu.classList.add("main-nav--opened");
  }
  else {
    menu.classList.remove("main-nav--opened");
    menu.classList.add("main-nav--closed");
  }
});