
// Before 300px
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('nav');
  var dropdownLink = document.querySelector('.dropdown-link');

  if (window.pageYOffset < 480) {
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
  if (window.pageYOffset < 480) {
    navbar.classList.add('navbar-yellow');
  }
});

dropdownLink.addEventListener('mouseout', function() {
  if (window.pageYOffset < 480) {
    navbar.classList.remove('navbar-yellow');
  }
});

var dropdownContent = document.querySelector('.dropdown-content');

dropdownContent.addEventListener('mouseover', function() {
  if (window.pageYOffset < 480) {
    navbar.classList.add('navbar-yellow');
  }
});

dropdownContent.addEventListener('mouseout', function() {
  if (window.pageYOffset < 480) {
    navbar.classList.remove('navbar-yellow');
  }
});

// Initial check on page load
if (window.pageYOffset < 480) {
  var navbar = document.querySelector('nav');
  navbar.classList.add('navbar-before-300px');
}