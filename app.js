(function(){
	var app = angular.module("store", []);
	app.controller("StoreController", function(){
		this.product = gem;
	});
	var gem = {
		name: "Triangle",
		price: 3.52,
		description: "My interior angles add up to 180 degrees and if that's not enough for you I don't know what is."
	}
})();