function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Get all sections with the class 'section'
const sections = document.querySelectorAll(".section");

// Options for the IntersectionObserver
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Callback function to be executed when a section is in view
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add 'active' class to the section in view
      entry.target.classList.add("active");
    } else {
      // Remove 'active' class from the section out of view
      entry.target.classList.remove("active");
    }
  });
};

// Create the IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
let isScrolling;

// Detect scrolling and add class accordingly
document.addEventListener("scroll", function () {
  clearTimeout(isScrolling);
  document.body.classList.add("scrolling");

  // Set a timeout to remove the class after scrolling stops
  isScrolling = setTimeout(function () {
    document.body.classList.remove("scrolling");
  }, 300); // Adjust the delay as needed
});