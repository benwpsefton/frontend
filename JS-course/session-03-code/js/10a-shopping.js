// shopping.js - version 2
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.

function calculate() {
	'use strict';
	var total; 
	var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
	
	total = quantity * price; //page 105
	
	tax = tax/100;
	tax = tax + 1;
	total = total * tax;
	
	total -= discount;
	
	document.getElementById(‘total’).value = total;
		
	return false;
			    
}	// End of calculate() function. 

 // End of init() function.
