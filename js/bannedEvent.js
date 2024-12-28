// Prevent user from right-clicking
document.addEventListener('contextmenu', function (event) {
	event.preventDefault();
});

// Detect Developer Tools Open
setInterval(function () {
	const before = new Date().getTime();
	debugger; // Forces the browser to stop if DevTools is open
	const after = new Date().getTime();
	if (after - before > 100) {
		window.location.reload(); // Optional: Reload the page or redirect
	}
}, 1000);

// Disable common screenshot shortcuts
document.addEventListener('keydown', function (event) {
	// Block Print Screen
	if (event.key === 'PrintScreen') {
		event.preventDefault();
	}

	// Block Ctrl + S (Save), Ctrl + P (Print), etc.
	if (
		event.ctrlKey &&
		['s', 'p', 'u', 'c', 'v'].includes(event.key.toLowerCase())
	) {
		event.preventDefault();
	}
});
