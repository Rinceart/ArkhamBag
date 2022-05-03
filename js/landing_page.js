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
      header.classList.add("navbar_sticky");
    } else {
      header.classList.remove("navbar_sticky");
    }
  } 
})