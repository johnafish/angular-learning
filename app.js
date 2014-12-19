(function(){
	var app = angular.module("store", []);
	app.controller("StoreController", function(){
		this.products = gems;
	});
	var gems = [
	{
		name: "Triangle",
		price: 3.52,
		canPurchase: true,
		soldOut: false,
		description: "My interior angles add up to 180 degrees and if that's not enough for you I don't know what is."
	},
	{
		name: "Circle",
		price: 9.99,
		canPurchase: true,
		soldOut: false,
		description: "I'm actually a perfect circle. Seriously. No, I'm not lying!"
	}
	]
})();