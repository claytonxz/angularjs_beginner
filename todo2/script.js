var app = angular.module('Todo', []);
app.controller('TodoController', function($scope) {
	// $scope.original_message='Angular is really really cool :D'; 
	$scope.todos=[
		'Get good at Angular.', 
		'Actually get good at Angular.', 
		'No, seriously. Get good at Angular.'
	]; 

	$scope.done = function(todo) {
		var indexOf = $scope.todos.indexOf(todo); 
		if (indexOf !== -1) {
			$scope.todos.splice(indexOf, 1);
		}
	}; 

	$scope.add = function(e) {
		if (e.which && e.which === 13) {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo=''; 
		}
	}

}); 