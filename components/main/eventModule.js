const angular = require('angular');
const template = require('./homeTemplate.html');
require('./main.scss');
require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router'])

  .config([
    '$locationProvider',
    function ($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ])
  .config(['$stateProvider', function ($stateProvider) {
    var weddingState = {
      name: 'wedding',
      url: '/wedding',
      templateUrl: template,
      controller: (['$scope', function ($scope) {
        $scope.event = {
          name: 'wedding',
          services: ['Wedding suits', 'Repast hall', 'Car hire', 'Wedding dresses', 'Guest invitation', 'Unique organization']
        };
      }])
    };

    var funeralState = {
      name: 'funeral',
      url: '/funeral',
      templateUrl: template,
      controller: (['$scope', function ($scope) {
        $scope.event = {
          name: 'funeral',
          services: ['Choose car for a rent', 'Repast hall', 'Invite guests', 'Memorial hall', 'Funeral merchandise']
        };
      }])
    };

    var birthdayState = {
      name: 'birthday',
      url: '/birthday',
      templateUrl: template,
      controller: (['$scope', function ($scope) {
        $scope.event = {

          name: 'birthday',
          services: ['Choose car for a rent', 'Design the event', 'Animators', 'Invite guest', 'Food courts', 'Places']
        };
      }])
    };

    var conferenceState = {
      name: 'conference',
      url: '/conference',
      templateUrl: template,
      controller: (['$scope', function ($scope) {
        $scope.event = {

          name: 'conference',
          services: ['Choose car for a rent', 'Rent a hall', 'Invite guests', 'Food courts']
        };
      }])
    };

    $stateProvider.state(weddingState);
    $stateProvider.state(funeralState);
    $stateProvider.state(birthdayState);
    $stateProvider.state(conferenceState);
  }])
  .component('eventComponent', require('../common/utils-components/eventComponent/eventComponent.js'))
  .name;