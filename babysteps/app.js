(function () {
	var app = angular.module('store', []); 
	app.controller('StoreController', function(){
		this.products = gems; 

	});

	var gems = [
	{
		name: 'dodecahedron',
		price: 2.95,
		description: '...', 
		canPurchase: true,
		soldOut : true, 
	}, 
	{
		name: 'pentagonal gem', 
		price: 5.95,
		description: "...", 
		canPurchase: false, 
	}];

})(); 
