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


var formElement = document.querySelector("form");
var userName = document.querySelector(".form__input--name");
var userPhone = document.querySelector(".form__input--phone");
var userEmail = document.querySelector(".form__input--email");
var userPacking = document.querySelector(".form__input--packing");
var userAddress = document.querySelector(".form__input--address");
var userComment = document.querySelector(".form__input--comment");
var buttonSubmit = document.querySelector(".cart__button-link");

function FormData (name, phone, email, packaging, address, comment) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.packaging = packaging;
  this.address = address;
  this.comment = comment;

  this.getUserData = function() {
    alert(formData);
    console.log();
  };
}

// formElement.onsubmit = async (data) => {
//   data.preventDefault();

//   buttonSubmit.("onsubmit", function () {
//     var formData = new FormData();
//     formData.append("userForm", "#userForm");
    
//     alert(formData);
//     console.log(formData);
//   })
// } 


var formData = new FormData(userName, userPhone, userEmail, userPacking, userAddress, userComment);

formData.append();

formData.getUserData();

// UserData.prototype.getUserData = function() {
//   alert(formData);
// };
