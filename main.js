// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // If using jQuery
  // if (typeof jQuery === "function" && el instanceof jQuery) {
  //   el = el[0];
  // }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

// To remove id of section from url onclick
// Original JavaScript code by Chirp Internet: www.chirp.com.au

window.addEventListener(
  "DOMContentLoaded",
  function(e) {
    var links = document.getElementsByTagName("A");
    for (var i = 0; i < links.length; i++) {
      if (!links[i].hash) continue;
      if (links[i].origin + links[i].pathname != self.location.href) continue;
      (function(anchorPoint) {
        links[i].addEventListener(
          "click",
          function(e) {
            anchorPoint.scrollIntoView(true);
            e.preventDefault();
          },
          false
        );
      })(document.getElementById(links[i].hash.replace(/#/, "")));
    }
  },
  false
);

// Toggle on click

var btn = document.getElementById("btn");
// var show = document.getElementById("showless");
var hidden = document.querySelectorAll(".hidden");

btn.addEventListener("click", function() {
  for (let i = 0; i < hidden.length; i++) {
    hidden[i].classList.toggle("show");
  }
  // document.querySelector('.showless').classList.toggle("show");
  btn.innerHTML == "Show More"
    ? (btn.innerHTML = "Show Less")
    : (btn.innerHTML = "Show More");
});

//Mobile side-nav

var hamburgerButton = document.querySelector(".hamburger__button");
var mobileNav = document.querySelector(".mobile");
var header = document.querySelector(".header");
// var body = document.querySelector("body");

hamburgerButton.addEventListener("click", function() {
  mobileNav.classList.toggle("open");
  // body.classList.toggle("blur");
});

mobileNav.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  header.classList.remove("open");
  // body.classList.remove("blur");
});

// CSS LOADER

function loading() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("container").style.display = "grid";
}

window.addEventListener("load", function() {
  setTimeout(() => {
    loading();
  }, 2000);
});

//Stickey Navbar

window.onscroll = function() {
  stickyNav();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 500;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("nav-dark");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("nav-dark");
  }
}
