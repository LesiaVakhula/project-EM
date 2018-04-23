const angular = require('angular');
const template = require('./homeTemplate.html');
require('@uirouter/angularjs');
// require('bootstrap');

module.exports = angular.module('emApp.main', ['ui.router'])

.config([
	'$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.config(['$stateProvider',function($stateProvider) {
  var helloState = {
    name: 'main',
    url:'/',
    templateUrl : template
  };

  $stateProvider.state(helloState);
}])
.name;