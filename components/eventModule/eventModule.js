const angular = require('angular');
const template = '<div><event-component></event-component></div>'
require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        const weddingState = {
            name: 'wedding',
            url: '/wedding',
            template: template,
            controller: (['$scope', function($scope) {
                $scope.event = {
                    name: 'wedding',
                    services: ['Wedding suits', 'Repast hall', 'Car hire', 'Wedding dresses', 'Guest invitation', 'Unique organization'],
                    classList: ['wedding-suits', 'repast-hall', 'car-hire', 'wedding-dresses', 'guest-invitation', 'unique-organization']
                };
            }])
        };

        const funeralState = {
            name: 'funeral',
            url: '/funeral',
            template: template,
            controller: (['$scope', function($scope) {
                $scope.event = {
                    name: 'funeral',
                    services: ['Choose car for a rent', 'Repast hall', 'Invite guests', 'Memorial hall', 'Funeral merchandise'],
                    classList: ['car-rent', 'repast-hall', 'invite', 'memorial-hall', 'funeral-merchandise']
                };
            }])
        };

        const birthdayState = {
            name: 'birthday',
            url: '/birthday',
            template: template,
            controller: (['$scope', function($scope) {
                $scope.event = {

                    name: 'birthday',
                    services: ['Choose car for a rent', 'Design the event', 'Animators', 'Invite guest', 'Food courts', 'Places'],
                    classList: ['car-rent', 'design', 'animators', 'invite', 'food-courts', 'places']
                };
            }])
        };

        const conferenceState = {
            name: 'conference',
            url: '/conference',
            template: template,
            controller: (['$scope', function($scope) {
                $scope.event = {

                    name: 'conference',
                    services: ['Choose car for a rent', 'Rent a hall', 'Invite guests', 'Food courts'],
                    classList: ['car-rent', 'hall', 'invite', 'food-courts']
                };
            }])
        };

        $stateProvider
            .state(weddingState)
            .state(funeralState)
            .state(birthdayState)
            .state(conferenceState);

    }])
    .component('eventComponent', require('./components/eventComponent/eventComponent.js'))
    .name;