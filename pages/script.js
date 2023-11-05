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


// BURGER MENU

const burgerBtn = document.querySelector(".burger-menu")
const navWrapper = document.querySelector(".nav_wrapper")
const closeBtn = document.querySelector(".close-btn")


burgerBtn.addEventListener("click", () => {
    navWrapper.style.left = "0px";  
     body.style.perspective = "1200px";
     burgerMenuContainer.style.transform = "translateZ(0)";
     unfoldContainer.classList.add("unfolded");
})

closeBtn.addEventListener("click", () => {
 navWrapper.style.left = "-100%";
  
} )


const menuChevrons = document.querySelectorAll(".chevron-rotate");
const navDropdowns = document.querySelectorAll(".nav-dropdown");

function updateChevrons() {
  menuChevrons.forEach(menuChevron => {
    if (window.innerWidth < 768) {
      menuChevron.classList.remove("fa-chevron-down");
      menuChevron.classList.add("fa-chevron-right");
    } else {
      menuChevron.classList.remove("fa-chevron-right");
      menuChevron.classList.add("fa-chevron-down");
    }
  });
}

// Initial update and add a resize event listener
window.addEventListener("load", updateChevrons);
window.addEventListener("resize", updateChevrons);


function toggleNavDropdown(event) {
  const chevron = event.currentTarget;
  const navLink = chevron.closest(".nav-link"); // Find the parent .nav-link
  const navDropdown = navLink.querySelector(".nav_dropdown"); // Find the .nav_dropdown within the parent

  navDropdown.classList.toggle("display-nav-dropdown");

  // Check if .nav_dropdown has the class 'display-nav-dropdown' and rotate the chevron
  if (navDropdown.classList.contains("display-nav-dropdown")) {
    chevron.style.transform = "rotate(90deg)";
  } else {
    chevron.style.transform = "rotate(0deg)"; // Reset rotation
  }
}

menuChevrons.forEach(chevron => {
  chevron.addEventListener("click", toggleNavDropdown);
});

 