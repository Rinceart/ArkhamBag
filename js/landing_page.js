// When the event DOMContentLoaded occurs, it is safe to access the DOM
document.addEventListener('DOMContentLoaded', function() {

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {userScroll()};

  // Get the header
  var header = document.getElementById("headerNav");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function userScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("navigation_sticky");
    } else {
      header.classList.remove("navigation_sticky");
    }
  } 
})

document.addEventListener('DOMContentLoaded', function() {
  window.onresize = function() {hideMobileMenu()};

  var mobileMenu = document.getElementById("mobileMenu");
  var btnClose = document.getElementById("btnClose");

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function hideMobileMenu() {
    if (window.innerWidth > 767) {
      mobileMenu.style.display = "none";
      btnClose.style.display = "none";
      btnMenu.style.display = "none";
    } else {
      btnMenu.style.display = "block";
    }
  } 
})

function openMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var btnClose = document.getElementById("btnClose");
  var btnMenu = document.getElementById("btnMenu");

  mobileMenu.style.display = "flex";
  btnClose.style.display = "block";
  btnMenu.style.display = "none";
}

function closeMobileMenu() {
  var mobileMenu = document.getElementById("mobileMenu");
  var btnClose = document.getElementById("btnClose");
  var btnMenu = document.getElementById("btnMenu");

  mobileMenu.style.display = "none";
  btnClose.style.display = "none";
  btnMenu.style.display = "block";
}