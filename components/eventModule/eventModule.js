const angular = require('angular');
const template = require('./eventModule.html');
const partners = require('../partnersModule/partnersModule');
const productsTemplate = require('./productsTemplate.html');
const invitation = require('../invitationModule/invitationModule');

require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router', partners, invitation])
    .config(function ($stateProvider) {
        'ngInject';
        const eventState = {
            name: 'event',
            url: '/:eventName',
            templateUrl: template,
            controller: function ($scope, $stateParams, $http, filterFactory, localStorageService) {
                'ngInject';
                filterFactory.currentEvent = $stateParams.eventName;
                localStorageService.set('currentEvent', $stateParams.eventName);
                $http.get('/getEventServices', {
                    params: {
                        name: $stateParams.eventName
                    }
                }).then(function successCallback(response) {
                    $scope.currentEvent = response.data;
                }, function errorCallback(response) {
                    console.log('Error!!!');
                });
            }
        };

        const servicesState = {
            name: 'event.services',
            url: '/services/:id',
            templateUrl: productsTemplate,
            controller: 'servicesCtrl'
        };

        $stateProvider
            .state(eventState)
            .state(servicesState);
    })
    .component('eventComponent', require('./components/eventComponent/eventComponent.js'))
    .component('productItemComponent', require('./components/productItemComponent/productItem.js'))
    .controller('servicesCtrl', require('../../components/eventModule/servicesCtrl.js'))
    .name;