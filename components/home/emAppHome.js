const angular = require('angular');
const template = require('./homeTemplate.html');
require('./homeStyle.scss');
require('@uirouter/angularjs');


module.exports = angular.module('emApp.home', ['ui.router'])


.config(['$stateProvider', function($stateProvider) {
  var homePageState = {
    name: 'home',
    url:'/',
    templateUrl : template,
    controller: (['$scope', function($scope) {
  	$scope.classesArray = ['birthday', 'funeral', 'conference', 'wedding'];
    }])
  };

  $stateProvider.state(homePageState);
}])
.component('eventActionComponent', require('../common/utils-components/eventActionComponent/eventActionComponent.js'))
.name;