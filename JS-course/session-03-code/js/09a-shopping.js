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
	
	//Return false to prevent submission of the form:
	return false;
		/*The function must return a value of false to prevent the form from actually
		being submitted (to the page named by the form’s action attribute).*/
	    
 // End of calculate() function.
	

 // End of init() function.
