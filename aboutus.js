let subMenu = document.getElementById("subMenu");
function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
/*
const pictureteam = document.getElementById("pictureteam");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  pictureteam.style.backgroundPositionY = offset * 0.2 + "px";
  pictureteam.style.backgroundSize = "cover";
});
*/



const pictureteam = document.getElementById("pictureteam");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  if (offset > 100) {
    pictureteam.style.backgroundPositionY = (offset - 2800) * 0.2 + "px";
    pictureteam.style.backgroundSize = "cover";
  }
});



const pictureowner = document.getElementById("pictureowner");
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  if (offset > 400) {
    pictureowner.style.backgroundPositionY = (offset - 3700) * 0.15 + "px";
    pictureowner.style.backgroundSize = "cover";
  }
});

// Before 300px
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  var dropdownLink = document.querySelector('.dropdown-link');

  if (window.pageYOffset < 520) {
    navbar.classList.add('navbar-before-300px');
    navbar.classList.remove('navbar-after-300px');
  } else {
    navbar.classList.remove('navbar-before-300px');
    navbar.classList.add('navbar-after-300px');
  }
});

var dropdownLink = document.querySelector('.dropdown-link');
var navbar = document.querySelector('nav');

dropdownLink.addEventListener('mouseover', function() {
  if (window.pageYOffset < 520) {
    navbar.classList.add('navbar-yellow');
  }
});

dropdownLink.addEventListener('mouseout', function() {
  if (window.pageYOffset < 520) {
    navbar.classList.remove('navbar-yellow');
  }
});

var dropdownContent = document.querySelector('.dropdown-content');

dropdownContent.addEventListener('mouseover', function() {
  if (window.pageYOffset < 520) {
    navbar.classList.add('navbar-yellow');
  }
});

dropdownContent.addEventListener('mouseout', function() {
  if (window.pageYOffset < 520) {
    navbar.classList.remove('navbar-yellow');
  }
});

// Initial check on page load
if (window.pageYOffset < 520) {
  var navbar = document.querySelector('nav');
  navbar.classList.add('navbar-before-300px');
}

//scroll indicator 
const scrollDownLink = document.querySelector('.ca3-scroll-down-link');

// Add click event listener to the scroll down link
scrollDownLink.addEventListener('click', handleScrollDown);

// Handle scroll down event
function handleScrollDown(event) {
  event.preventDefault();
  const scrollHeight = window.innerHeight * .96; // Calculate 110% of the viewport height
  window.scrollTo({
    top: scrollHeight,
    behavior: 'smooth'
  });
}