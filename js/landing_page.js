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
    var inpName = document.getElementById("inp_name").value;
    var inpEmail = document.getElementById("inp_email").value;
    var inpMessage = document.getElementById("inp_message").value;
    
    if (inpName != '' &&
        inpEmail != '' &&
        inpMessage != '') {
          document.getElementById("btn_submit").disabled = false;
    } else {
      document.getElementById("btn_submit").disabled = true;
    }
})