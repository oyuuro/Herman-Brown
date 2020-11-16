console.log("hello world!");

var openFormBtn = document.querySelector('.jsOpenFormBtn');
//var closeFormBtn = document.querySelector('.jsCloseFormBtn');
var form = document.querySelector('.form');

openFormBtn.addEventListener('click', function() {
  form.classList.add('form-visible');
})

/*closeFormBtn.addEventListener('click', function() {
  form.classList.remove('form-visible')
  openFormBtn.classList.remove('button-hidden')
})*/

// When the user scrolls the page, execute myFunction
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

/*function myFunction() {
  var x = document.getElementById("hamburgerContainer");
  if (x.style.display === "none") {
    return 0;
  } else {
    x.style.display = "none";
  }
}
*/

/*anything.addEventListener('click', function() {
    console.log("finally working!");
    //hamburgerContainer.classList.add('hamburger-hidden');
})*/

/*
// "nasłuchujemy" na zdarzenie kliknięcia na elemencie 'modal', a jeśli już takie zdarzenie nastąpi to wykonujemy kod, który jest w środku
hamburgerContainer.addEventListener('click', function(event) {
  // do zmiennej przypisujemy 'event.target', który odnosi się dokładnie do elementu klikniętego
  var target = event.target

  // sprawdzamy czy tym elementem klikniętym jest modal, a jeśli tak to usuwamy z niego klasę, która odpowiada za pokazywanie się elementu
  
  // modal w naszym przypadku obejmuje całość łącznie z tym przyciemnionym tłem!!! sprawdzamy, czy zostało kliknięte to przyciemnione tło, czy może np tekst, lub białe tło modala - bo jeśli to któryś z tych elementów to nic wtedy nie robimy
  if (target == hamburgerContainer) {
   hamburgerContainer.classList.add('hamburger-hidden-again')
  }
})
*/