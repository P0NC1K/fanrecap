// Get the button element
const backToTopButton = document.getElementById("back-to-top");

// Add a scroll event listener
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    // If the user has scrolled down 100 pixels or more, show the button
    backToTopButton.style.display = "block";
  } else {
    // Otherwise, hide the button
    backToTopButton.style.display = "none";
  }
});

// Add a click event listener to scroll to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Use smooth scrolling for a nicer effect (optional)
  });
});
