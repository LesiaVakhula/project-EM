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

   $scope.classesArray = [
    {
    name: 'birthday',
    className: 'birthday',
    imageUrl: 'homepage_birthday.png'
   },
   {
    name: 'funeral',
    className: 'funeral',
    imageUrl: 'homepage_funeral.png'
   }, 
    {
    name: 'conference',
    className: 'conference',
    imageUrl: 'homepage_conference.png'
   },
   {
    name: 'wedding',
    className: 'wedding',
    imageUrl: 'homepage_wedding.png'
   }
   ];
    }])
  };

  $stateProvider.state(homePageState);
}])
.component('eventActionComponent', require('../common/utils-components/eventActionComponent/eventActionComponent.js'))
.name;