// shopping.js - version 2
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.

	
	// Format the total:
	    
 // End of calculate() function.
 
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;

}// End of init() function.
window.onload = init;