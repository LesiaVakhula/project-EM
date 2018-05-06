const angular = require('angular');
const template = require('./homeTemplate.html');
require('./homeStyle.scss');
require('@uirouter/angularjs');

module.exports = angular.module('emApp.home', ['ui.router'])
  .config(function ($stateProvider) {
    'ngInject';
    const homePageState = {
      name: 'home',
      url: '/',
      templateUrl: template,
      controller: function ($scope, $http) {
        'ngInject';
        $http.get('/getEventsData').then(function successCallback(response) {
          $scope.eventsArray = response.data;
        }, function errorCallback(response) {
          console.log('Error!!!');
        });
      }
    };
    $stateProvider.state(homePageState);
  })
  .component('eventActionComponent', require('../common/utils-components/eventActionComponent/eventActionComponent.js'))
  .name;