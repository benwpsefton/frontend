// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function calculate(){
	'use strict';
    const number = document.getElementById('number').value;
    var check = number === 1;
	var squared = number * number;
	var cubed = number * number * number;

	// factorial finding
	if (number < 0){ // elimination of negative numbers
		document.getElementById('factorial').value = "Error. Number must be positive to have a factorial."
	}
	else if (number === 0){
		document.getElementById('factorial').value = "The factorial of this value is 1."
	}


	/* function factorial(n){
		var fact = 1;{
			while (n > 1) {
				factorial *= n;
				n--;
			}
		return fact;
		}
	} */

	// Re-assigns calculated values to original elements
	document.getElementById('factorial').value = factorial;
	document.getElementById('squared').value = squared;
	document.getElementById('cubed').value = cubed;
	
	return false; 
	
} // End of calculate() function.

 
function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.

// Adds an event listener when the window has loaded
window.onload = init;