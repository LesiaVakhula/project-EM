const angular = require('angular');
const template = require('./eventModule.html');
const partners = require('./components/partners/partnersComponent');
const invitation = require('./components/invitation/invitationComponent');
require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router',partners,invitation])
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
                        imageUrl: 'wedding/wedding-suits.jpg',
                        mobileImageUrl: 'wedding/wedding-suits-mobile.jpg'
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'wedding/wedding-repast-hall.jpg',
                        mobileImageUrl: 'wedding/wedding-repast-hall-mobile.jpg'
                    }, {
                        name: 'Car hire',
                        className: 'car-hire',
                        imageUrl: 'wedding/wedding-car-hire.png',
                        mobileImageUrl: 'wedding/wedding-car-hire-mobile.jpg'
                    }, {
                        name: 'Wedding dresses',
                        className: 'wedding-dresses',
                        imageUrl: 'wedding/wedding-dresses.jpg',
                        mobileImageUrl: 'wedding/wedding-dresses-mobile.jpg'
                    }, {
                        name: 'Guest invitation',
                        className: 'guest-invitation',
                        imageUrl: 'wedding/wedding-guest-invitation.jpg',
                        mobileImageUrl: 'wedding/wedding-guest-invitation-mobile.jpg'
                    }, {
                        name: 'Unique organization',
                        className: 'unique-organization',
                        imageUrl: 'wedding/wedding-unique-organization.jpeg',
                        mobileImageUrl: 'wedding/wedding-unique-organization-mobile.jpg'
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
                        imageUrl: 'funeral/funeral-car-rent.png',
                        mobileImageUrl: 'funeral/funeral-car-rent-mobile.jpg'
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'funeral/funeral-repast-hall.png',
                        mobileImageUrl: 'funeral/funeral-repast-hall-mobile.jpg'
                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'funeral/funeral-invite-guest.png',
                        mobileImageUrl: 'funeral/funeral-invite-guest-mobile.jpg'
                    }, {
                        name: 'Memorial hall',
                        className: 'memorial-hall',
                        imageUrl: 'funeral/funeral-memorial-hall.png',
                        mobileImageUrl: 'funeral/funeral-memorial-hall-mobile.jpg'
                    }, {
                        name: 'Funeral merchandise',
                        className: 'funeral-merchandise',
                        imageUrl: 'funeral/funeral-merchandise.png',
                        mobileImageUrl: 'funeral/funeral-merchandise-mobile.jpg'
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
                        imageUrl: 'birthday/birthday-car-rent.png',
                        mobileImageUrl: 'birthday/birthday-car-rent-mobile.jpg'
                    }, {
                        name: 'Design the event',
                        className: 'design',
                        imageUrl: 'birthday/birthday-design.png',
                        mobileImageUrl: 'birthday/birthday-design-mobile.jpg'
                    }, {
                        name: 'Animators',
                        className: 'animators',
                        imageUrl: 'birthday/birthday-animators.png',
                        mobileImageUrl: 'birthday/birthday-animators-mobile.jpg'
                    }, {
                        name: 'Invite guest',
                        className: 'invite',
                        imageUrl: 'birthday/birthday-invite.jpg',
                        mobileImageUrl: 'birthday/birthday-invite-mobile.jpg'
                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'birthday/birthday-food-cort.jpg',
                        mobileImageUrl: 'birthday/birthday-food-cort-mobile.jpg'
                    }, {
                        name: 'Places',
                        className: 'places',
                        imageUrl: 'birthday/birthday-places.jpg',
                        mobileImageUrl: 'birthday/birthday-places-mobile.jpg'
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
                        imageUrl: 'conference/conference-car-rent.jpeg',
                        mobileImageUrl: 'conference/conference-car-rent-mobile.jpg'
                    }, {
                        name: 'Rent a hall',
                        className: 'hall',
                        imageUrl: 'conference/conference-rent-hall.jpg',
                        mobileImageUrl: 'conference/conference-rent-hall-mobile.jpg'
                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'conference/conference-invite-guest.jpg',
                        mobileImageUrl: 'conference/conference-invite-guest-mobile.jpg'
                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'conference/conference-food-cort.jpg',
                        mobileImageUrl: 'conference/conference-food-cort-mobile.jpg'
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