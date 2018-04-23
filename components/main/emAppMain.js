const angular = require('angular');
const template = require('./homeTemplate.html');
require('./main.scss');
require('@uirouter/angularjs');
// require('bootstrap');

module.exports = angular.module('emApp.main', ['ui.router'])

.config([
	'$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}])

.config(['$stateProvider', function($stateProvider) {
  var homePageState = {
    name: 'main',
    url:'/',
    templateUrl : template,
    controller: (['$scope', function($scope) {
  	$scope.classesArray = ['birthday', 'funeral', 'conference', 'wedding'];
}])
 }

  $stateProvider.state(homePageState);
}])
.component('eventActionComponent', require('../common/utils-components/eventActionComponent/eventActionComponent.js'))
.name;