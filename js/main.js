// Function to toggle the navigation menu
function toggleNav() {
  var nav = document.querySelector(".header .nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
// Event listener for the hamburger button click
document.querySelector(".hamburger-btn").addEventListener("click", toggleNav);

// Event listener for navigation links click
var navLinks = document.querySelectorAll(".header .nav a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 782) {
      toggleNav();
    }
  });
});

// Scroll Fixed
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.scrollY > 20) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// Scroll Function to handle smooth scrolling
function scrollToSection(event) {
  event.preventDefault();
  // Get the target section's ID from the clicked link
  var targetId = event.target.getAttribute("href").substring(1);
  // Find the target section element
  var targetSection = document.getElementById(targetId);
  // Calculate the offset based on the topOffset value
  var offset = -50; // Set the desired topOffset value
  // Calculate the target position by adding the offset to the target section's top position
  var targetPosition =
    targetSection.getBoundingClientRect().top + window.pageYOffset + offset;
  // Scroll to the target position smoothly
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Get all the navigation links
var navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listeners to each navigation link
navLinks.forEach(function (link) {
  link.addEventListener("click", scrollToSection);
});
