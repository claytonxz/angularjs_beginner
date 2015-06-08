(function () {
	var app = angular.module('store', []); 
	app.controller('StoreController', function(){
		this.products = gems; 

	});

	app.controller('PanelController', function(){
		this.tab=1; 
		this.selectTab = function(setTab) {
			this.tab = setTab; 
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab; 
		};
	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review); 
			this.review={}; 
		}; 
	}); 

	});
	var gems = [
	{
		name: 'dodecahedron',
		price: 2.95,
		description: '...', 
		canPurchase: true,
		soldOut : true, 
		reviews:[
		{
			stars: 5, 
			body: "I love this product!", 
			author: "bob@helloworld.com"
		}], 
	}, 
	{
		name: 'pentagonal gem', 
		price: 5.95,
		description: "...", 
		canPurchase: false, 
		reviews:[
		{
			stars: 3, 
			body: "This product was mediocre... ", 
			author: "lisa@helloworld.com"
		}], 
	}];

})(); 
