var mainNav= document.querySelector(".page-header__navigation");
var mainNavToggle = document.querySelector(".navigation__link--menu");

mainNav.classList.remove("page-header__navigation--nojs");

mainNavToggle.addEventListener("click", function() {
  if (mainNav.classList.contains("page-header__navigation--closed")) {
    mainNav.classList.remove("page-header__navigation--closed");
    mainNav.classList.add("page-header__navigation--opened");
  } else {
    mainNav.classList.add("page-header__navigation--closed");
    mainNav.classList.remove("page-header__navigation--opened");
  }
});
