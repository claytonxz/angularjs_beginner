(function () {
	var app = angular.module('store', []); 
	app.controller('StoreController', function(){
		this.product = gem; 
	});

	var gem = {
		name: 'dodecahedron',
		price: 2.95,
		description: '...', 
	}

})(); 
