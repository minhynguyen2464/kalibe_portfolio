let currentExpanded = null;

document.addEventListener('DOMContentLoaded', function () {
	const firstImage = document.querySelector('.gallery-image'); // Select the first image
	if (firstImage) {
		expandImage(firstImage); // Automatically expand the first image on page load
	}
});

function expandImage(image) {
	const row = document.querySelector('.row');
	const images = document.querySelectorAll('.gallery-image');
	const firstImageColumn = image.closest('.col-xl-3');

	// If there is already an expanded image, shrink it back
	if (currentExpanded) {
		currentExpanded.classList.remove('expanded');
		const allImages = document.querySelectorAll('.gallery-image');
		allImages.forEach((img) => {
			const col = img.closest('.col-xl-3');
			col.classList.remove('shrink', 'expanded-col');
		});
	}

	// If clicked on the first image, it will expand to 6 columns (50%)
	if (firstImageColumn) {
		firstImageColumn.classList.add('expanded-col'); // First image takes 6 columns
	}

	// Add shrink class to other images (2 columns each)
	images.forEach((img) => {
		if (img !== image) {
			const col = img.closest('.col-xl-3');
			col.classList.add('shrink');
		}
	});

	// Add expanded class to the clicked image
	image.classList.add('expanded');

	// Set the clicked image as the currently expanded one
	currentExpanded = image;
}
