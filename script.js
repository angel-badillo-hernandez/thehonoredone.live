// Apply header scrolling effect
$(window).on('scroll', function() {
	// Check if the window is scrolled down
	if ($(window).scrollTop()) {
	  // Add 'nav-show' class to the header to apply scrolling effect
	  $('header').addClass('nav-show');
	} else {
	  // Remove 'nav-show' class when at the top of the page
	  $('header').removeClass('nav-show');
	}
  });
  
  // Function to handle hamburger menu interactions
  const navSlide = () => {
	// Select the hamburger menu element
	const hamburger = document.querySelector(".hamburger");
	// Select the navigation bar element
	const navbar = document.querySelector(".nav-bar");
	// Select all navigation links
	const navLinks = document.querySelectorAll(".nav-bar li");
  
	// On hamburger menu click
	hamburger.onclick = () => {
	  // Toggle the 'nav-active' class to show/hide the navigation bar
	  navbar.classList.toggle("nav-active");
  
	  // Animate the navigation links
	  navLinks.forEach((link, index) => {
		// Check if the link already has animation applied
		if (link.style.animation) {
		  // Reset animation if already applied
		  link.style.animation = "";
		} else {
		  // Apply fade animation with staggered timing
		  link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + 1}s`;
		}
	  });
  
	  // Toggle the 'toggle' class to animate the hamburger icon
	  hamburger.classList.toggle("toggle");
	};
  };
  
  // Initialize navSlide function when the window loads
  window.onload = () => navSlide();
  