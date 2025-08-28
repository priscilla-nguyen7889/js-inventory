//if you choose to use jQuery you will need to comment out this
//line of code, or at least rename the function to something else
//var $ = function(id) { return document.getElementById(id); }

"use strict"; //Source: edit code from Solutions of Chapter 13,16 Javascript-JQuery of MurachFreeDownload (https://www.murach.com/shop-books/web-development-books/murach-s-javascript-and-jquery-4th-edition-detail)
$(document).ready( () => {
	
	//Add Product button
    $("#btnAdd").click( () => {
	
			//get values entered by user 
			var Code = $("#prodCode").val();
			var Name = $("#prodName").val();
			var Desc = $("#prodDesc").val();
			var Price = $("#price").val();
			var QuantityOnHand = $("#quantity").val();
			
			//Create object
			product.Code = Code;
			product.Name = Name;
			product.Desc = Desc;
			product.Price = Price;
			product.QuantityOnHand = QuantityOnHand;
		
		// regular expressions for validity testing
		const CodePattern = /^[A-Z]{2}-\d{4}$/;
		const QuantityOnHandPattern = /^\d{1,4}$/;
		
		// check user entries for validity
		if (Code ==="" || Name==="" || Desc==="" || Price==="" || QuantityOnHand===""  ) {			
			alert("all fields are required.");	
		}
		else if (!CodePattern.test(Code)){
			alert ("product code is invalid. Product Code must be 7 charaters, formatted as: AA-9999.");
			$("#prodCode").focus();
		}
		else if (isNaN(Price) || Price <0 || (Price !=parseFloat(Price))) {
			alert ("price must be a valid number.")
			$("#price").focus();
		}
		else if (!QuantityOnHandPattern.test(QuantityOnHand)){
			alert ("quantity on hand is invalid. Quantity on Hand must be numeric from 1 to 4 digits.");
			$("#quantity").focus();
		}
		else {
			$("#btnAdd").prop("disabled", true);       //https://stackoverflow.com/questions/1594952/jquery-disable-enable-submit-button
			$("#btnIncrease").prop("disabled", false);
			$("#btnDecrease").prop("disabled", false);
			
			alert ("Product added successfully.");
			
			$("#fldProdDetails").attr("class", "");
			$("#lblTotal").text(product.CalculateTotal());
			$("#lblAdded").text((new Date()).toDateString());
		}
		});
		
	//Increase Quantity button
	$("#btnIncrease").click(() =>{
		product.IncreaseQuantity();
		$("#quantity").val(product.QuantityOnHand);
		$("#lblTotal").text(product.CalculateTotal());
		$("#lblAdded").text((new Date()).toDateString());
	
	});
	
	//Decrease Quantity button
	$("#btnDecrease").click( () => {
		try {
			product.DecreaseQuantity();
			$("#quantity").val(product.QuantityOnHand);
			$("#lblTotal").text(product.CalculateTotal());
			$("#lblAdded").text((new Date()).toDateString());
		}
		catch (error) {
			alert (error.name + ": " + error.message);
		}
		finally {
			$("#quantity").focus();
            $("#quantity").select();
		}
	});
	
	//Clear button
	$("#btnClear").click( function() {
        $("#prodCode").val("");
		$("#prodName").val("");
		$("#prodDesc").val("");
		$("#price").val("");
		$("#quantity").val("");
		
		$("#btnAdd").prop("disabled", false);       
		$("#btnIncrease").prop("disabled", true);
		$("#btnDecrease").prop("disabled", true);
		
		$("#fldProdDetails").attr("class", "hide");
			
		$("#prodCode").focus();
	});
		
	$("#prodCode").focus();
});