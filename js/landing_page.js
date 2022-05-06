var inpName = '';
var inpEmail = '';
var inpMessage = '';
var capthcaFilled = false;

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {userScroll()};

  var header = document.getElementById("topNav");
  var sticky = header.offsetTop;

  function userScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("top_nav_filled");
    } else {
      header.classList.remove("top_nav_filled");
    }
  } 

  window.onresize = function() {hideMobileMenu()};

  var mobileNav = document.getElementById("mobileNav");

  function hideMobileMenu() {
    if (window.innerWidth > 767) {
      mobileNav.style.display = "none";
    }
  } 
})

function openMobileNav() {
  var mobileNav = document.getElementById("mobileNav");
  mobileNav.style.display = "flex";
}

function closeMobileNav() {
  var mobileNav = document.getElementById("mobileNav");
  mobileNav.style.display = "none";
}

document.addEventListener('keyup', function() {
    inpName = document.getElementById("inp_name").value;
    inpEmail = document.getElementById("inp_email").value;
    inpMessage = document.getElementById("inp_message").value;
    
    setSubmitButton();
})

function correctCaptcha() {
  capthcaFilled = true;
  
  setSubmitButton();
}

function setSubmitButton() {
  if (inpName != '' &&
  inpEmail != '' &&
  inpMessage != '' &&
  capthcaFilled === true) {
    document.getElementById("btn_submit").disabled = false;
    document.getElementById("btn_submit").innerText = 'Submit';
  } else {
    document.getElementById("btn_submit").disabled = true;
    document.getElementById("btn_submit").innerText = 'Fill out the form first';
  }
}