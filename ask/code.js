console.log("hello about!");

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    menu.classList.add("sticky-menu")
  } else {
    navbar.classList.remove("sticky");
      menu.classList.remove("sticky-menu")
  }
    
}

var hamburgerButton = document.querySelector('.hamburger-button');
var hamburgerContainer = document.getElementById("hamburgerContainer");




hamburgerButton.addEventListener('click', function() {
   document.getElementById("hamburgerContainer").style.display = "block";
     console.log("this one worked already!")
})


var hamburgerCloseButton = document.querySelector('.hamburger-js');
var button2  = document.querySelector('.hamburger-menu-button');

button2.addEventListener('click', function() {
   document.getElementById("hamburgerContainer").style.display = "none";
     console.log("FINALLY!")
})
