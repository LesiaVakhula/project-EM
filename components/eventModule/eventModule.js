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
                        className: 'wedding-suits',
                        imageUrl: 'wedding/wedding-suits.jpg'
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'wedding/wedding-repast-hall.jpg'
                    }, {
                        name: 'Car hire',
                        className: 'car-hire',
                        imageUrl: 'wedding/wedding-car-hire.jpg'
                    }, {
                        name: 'Wedding dresses',
                        className: 'wedding-dresses',
                        imageUrl: 'wedding/wedding-dresses.jpg'
                    }, {
                        name: 'Guest invitation',
                        className: 'guest-invitation',
                        imageUrl: 'wedding/wedding-guest-invitation.jpg'
                    }, {
                        name: 'Unique organization',
                        className: 'unique-organization',
                        imageUrl: 'wedding/wedding-unique-organization.jpeg'
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
                        className: 'car-rent',
                        imageUrl: 'funeral/funeral-car-rent.png'
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'funeral/funeral-repast-hall.png'
                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'funeral/funeral-invite-guest.png'

                    }, {
                        name: 'Memorial hall',
                        className: 'memorial-hall',
                        imageUrl: 'funeral/funeral-memorial-hall.png'

                    }, {
                        name: 'Funeral merchandise',
                        className: 'funeral-merchandise',
                        imageUrl: 'funeral/funeral-merchandise.png'
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
                        className: 'car-rent',
                        imageUrl: 'birthday/birthday-car-rent.png'

                    }, {
                        name: 'Design the event',
                        className: 'design',
                        imageUrl: 'birthday/birthday-design.png'
                    }, {
                        name: 'Animators',
                        className: 'animators',
                        imageUrl: 'birthday/birthday-animators.png'
                    }, {
                        name: 'Invite guest',
                        className: 'invite',
                        imageUrl: 'birthday/birthday-invite.jpg'
                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'birthday/birthday-food-cort.jpg'
                    }, {
                        name: 'Places',
                        className: 'places',
                        imageUrl: 'birthday/birthday-places.png'
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
                        className: 'car-rent',
                        imageUrl: 'conference/conference-car-rent.jpeg'

                    }, {
                        name: 'Rent a hall',
                        className: 'hall',
                        imageUrl: 'conference/conference-rent-hall.jpg'

                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'conference/conference-invite-guest.jpg'

                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'conference/conference-food-cort.jpg'
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