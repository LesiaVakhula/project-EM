/*function($scope) {

	const mainPageController = function ($scope) {
		$scope.classesArray = [
		{ className: 'col-xs-6 wedding', name:'wedding' }, 
		{ className: 'col-xs-6 funeral', name:'funeral' },
		{ className: 'col-xs-6 conference', name:'conference' },
		{ className: 'col-xs-6 birthday', name:'birthday' }
		];
	}
}*/

var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  	$scope.classesArray = [
		{ className: 'col-xs-6 wedding', name:'wedding' }, 
		{ className: 'col-xs-6 funeral', name:'funeral' },
		{ className: 'col-xs-6 conference', name:'conference' },
		{ className: 'col-xs-6 birthday', name:'birthday' }
		];
}]);