const angular = require('angular');
const template = require('./eventModule.html');
require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        const weddingState = {
            name: 'wedding',
            url: '/wedding',
            templateUrl: template,
            controller: (['$scope', function ($scope) {
                $scope.event = {
                    name: 'wedding',
                    services: [{
                        name: 'Wedding suits',
                        className: 'wedding-suits'

                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall'

                    }, {
                        name: 'Car hire',
                        className: 'car-hire'

                    }, {
                        name: 'Wedding dresses',
                        className: 'wedding-dresses'

                    }, {
                        name: 'Guest invitation',
                        className: 'guest-invitation'
                    }, {
                        name: 'Unique organization',
                        className: 'unique-organization'
                    }],
                };
            }])
        };

        const funeralState = {
            name: 'funeral',
            url: '/funeral',
            templateUrl: template,
            controller: (['$scope', function ($scope) {
                $scope.event = {
                    name: 'funeral',
                    services: [{
                        name: 'Choose car for a rent',
                        className: 'car-rent'
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall'

                    }, {
                        name: 'Invite guests',
                        className: 'invite'

                    }, {
                        name: 'Memorial hall',
                        className: 'memorial-hall'

                    }, {
                        name: 'Funeral merchandise',
                        className: 'funeral-merchandise'
                    }]
                };
            }])
        };

        const birthdayState = {
            name: 'birthday',
            url: '/birthday',
            templateUrl: template,
            controller: (['$scope', function ($scope) {
                $scope.event = {
                    name: 'birthday',
                    services: [{
                        name: 'Choose car for a rent',
                        className: 'car-rent'

                    }, {
                        name: 'Design the event',
                        className: 'design'

                    }, {
                        name: 'Animators',
                        className: 'animators'

                    }, {
                        name: 'Invite guest',
                        className: 'invite'

                    }, {
                        name: 'Food courts',
                        className: 'food-courts'

                    }, {
                        name: 'Places',
                        className: 'places'
                    }]
                };
            }])
        };

        const conferenceState = {
            name: 'conference',
            url: '/conference',
            templateUrl: template,
            controller: (['$scope', function ($scope) {
                $scope.event = {
                    name: 'conference',
                    services: [{
                        name: 'Choose car for a rent',
                        className: 'car-rent'

                    }, {
                        name: 'Rent a hall',
                        className: 'hall'

                    }, {
                        name: 'Invite guests',
                        className: 'invite'

                    }, {
                        name: 'Food courts',
                        className: 'food-courts'
                    }]
                }
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