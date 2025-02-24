// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function calculate(){
	'use strict';
    let number = document.getElementById('number').value;
    let check = number === 1;
	let squared = number * number;
	let cubed = number * number * number;
	function factorial(n){
		let fact = 1;{
			while (n > 1) {
				factorial *= n;
				n--;
			}
		return fact;
		}
	}

	// Re-assigns calculated values to original elements
	document.getElementById('factorial').value = fact;
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