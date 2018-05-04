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
      controller: function ($scope) {
        'ngInject';
        $scope.classesArray = [{
            name: 'birthday',
            stateTo: 'event({eventName: "birthday"})',
            className: 'birthday',
            imageUrl: 'birthday/homepage_birthday.png'
          },
          {
            name: 'funeral',
            stateTo: 'event({eventName: "funeral"})',
            className: 'funeral',
            imageUrl: 'funeral/homepage_funeral.png'
          },
          {
            name: 'conference',
            stateTo: 'event({eventName: "conference"})',
            className: 'conference',
            imageUrl: 'conference/homepage_conference.png'
          },
          {
            name: 'wedding',
            stateTo: 'event({eventName: "wedding"})',
            className: 'wedding',
            imageUrl: 'wedding/homepage_wedding.png'
          }
        ];
      }
    };

    $stateProvider.state(homePageState);
  })
  .component('eventActionComponent', require('../common/utils-components/eventActionComponent/eventActionComponent.js'))
  .name;