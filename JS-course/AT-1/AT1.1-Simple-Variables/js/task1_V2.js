// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function calculate() {
	'use strict';
	var number = document.getElementById('number').value;
	var squared = number * number;
	var cubed = number * number * number;
	function factorialise(number) { //establishing factorial function before variable creation
		let result = 1;
	  
		for (let i = 2; i <= number; i++) {
		  result = result * i;
		}
	  
		return result;
	  }
	var factorial = factorialise(number);

	// Re-assigns calculated values to original elements
	document.getElementById('factorial').value = factorial;
	document.getElementById('squared').value = squared;
	document.getElementById('cubed').value = cubed;

	return false;

} // End of calculate() function.

function check(number) {
	'use strict';
	var number = document.getElementById('number').value;
	var checked = check(number);
	if (Number.isInteger(number)) {
		return true;
	}
	else {
		return false;
	}
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = check;
	if (checked = true) {
		document.getElementById('theForm').onsubmit = calculate;
	}
	else {
		alert("Please enter a valid number.");
		location.reload(true);
	}

	return false;

} // End of init() function.

// Adds an event listener when the window has loaded
window.onload = init;