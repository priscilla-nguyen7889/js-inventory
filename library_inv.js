"use strict"
//step #1 - define the javascript "product" object literal here
var product = {
	Code: "",
	Name: "",
	Desc: "",
	Price: 0,
	QuantityOnHand: 0,
	IncreaseQuantity: function() {
		this.QuantityOnHand = parseInt($("#quantity").val()) +1;
		return this.QuantityOnHand;
	},
	DecreaseQuantity: function() { 
		if (this.QuantityOnHand>0) {
			this.QuantityOnHand = parseInt($("#quantity").val()) -1;
			return this.QuantityOnHand;
		}
		else throw new Error ("Quantity on Hand must be greater than 0.");
	},
	CalculateTotal: function() { 
		return ("$" + (this.QuantityOnHand * this.Price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"));
		//https://www.codegrepper.com/code-examples/javascript/jquery+convert+number+to+currency
	}
};

