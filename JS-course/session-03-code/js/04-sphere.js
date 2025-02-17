//  sphere.js
// This script calculates the volume of a sphere.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	
	// For storing the volume:
	var volume;
    
    // Get a reference to the form value:


	// Make sure it's positive:

	
	// Perform the calculation:


	// Format the volume:
	
	
	// Display the volume:

	
	// Return false to prevent submission:
	return false;
    
 // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;


 // End of init() function.
window.onload = init;