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


var formElement = document.querySelector(".form");
var buttonSubmit = document.querySelector(".cart__button-link");

function getFormData (name, phone, email, packaging, address, comment, productFirst, productSecond, productThirth) {
  var formData = {name, phone, email, packaging, address, comment, productFirst, productSecond, productThirth};
  formData.name;

  alert(`{ ${Object.keys(formData).map((key) => `${key} : ${formData[key]}`)} }`);
  console.log(formData);
};

function submitHandler(e) {
  e.preventDefault();
  var userName = document.querySelector(".form__input--name").value;
  var userPhone = document.querySelector(".form__input--phone").value;
  var userEmail = document.querySelector(".form__input--email").value;
  var userPacking = document.querySelector(".form__input--select").value;
  var userAddress = document.querySelector(".form__input--address").value;
  var userComment = document.querySelector("#comment-input").value;
  var productFirst = document.querySelector("#count-first-product").value;
  var productSecond = document.querySelector("#count-second-product").value;
  var productThirth = document.querySelector("#count-thirth-product").value;

  getFormData(userName, userPhone, userEmail, userPacking, userAddress, userComment, productFirst, productSecond, productThirth);
}

formElement.addEventListener('submit', submitHandler);
