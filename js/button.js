// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		// Show button after scrolling 300px down
		backToTopButton.style.display = 'block';
	} else {
		backToTopButton.style.display = 'none';
	}
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth', // Smooth scroll
	});
});

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the span with id 'current-year'
document.getElementById('current-year').textContent = currentYear;

// // Wait for the page to load completely
window.addEventListener('load', function () {
	// Hide the loading screen
	document.getElementById('loading-screen').style.display = 'none';

	// Show the main content
	document.getElementById('main-content').style.display = 'block';
});
