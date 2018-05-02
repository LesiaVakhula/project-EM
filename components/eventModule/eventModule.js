const angular = require('angular');
const template = require('./eventModule.html');
const partners = require('./components/partners/partnersComponent');
const invitation = require('./components/invitation/invitationComponent');
require('@uirouter/angularjs');
const productsTemplate = require('./productsTemplate.html');
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
                        mobileImageUrl: 'wedding/wedding-suits-mobile.jpg',
                        id: 9
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'wedding/wedding-repast-hall.jpg',
                        mobileImageUrl: 'wedding/wedding-repast-hall-mobile.jpg',
                        id: 2

                    }, {
                        name: 'Car hire',
                        className: 'car-hire',
                        imageUrl: 'wedding/wedding-car-hire.png',
                        mobileImageUrl: 'wedding/wedding-car-hire-mobile.jpg',
                        id: 1
                    }, {
                        name: 'Wedding dresses',
                        className: 'wedding-dresses',
                        imageUrl: 'wedding/wedding-dresses.jpg',
                        mobileImageUrl: 'wedding/wedding-dresses-mobile.jpg',
                        id: 10
                    }, {
                        name: 'Guest invitation',
                        className: 'guest-invitation',
                        imageUrl: 'wedding/wedding-guest-invitation.jpg',
                        mobileImageUrl: 'wedding/wedding-guest-invitation-mobile.jpg',
                        id: 8
                    }, {
                        name: 'Unique organization',
                        className: 'unique-organization',
                        imageUrl: 'wedding/wedding-unique-organization.jpeg',
                        mobileImageUrl: 'wedding/wedding-unique-organization-mobile.jpg',
                        id: 8
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
                        mobileImageUrl: 'funeral/funeral-car-rent-mobile.jpg',
                        id: 11
                    }, {
                        name: 'Repast hall',
                        className: 'repast-hall',
                        imageUrl: 'funeral/funeral-repast-hall.png',
                        mobileImageUrl: 'funeral/funeral-repast-hall-mobile.jpg',
                        id: 2
                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'funeral/funeral-invite-guest.png',
                        mobileImageUrl: 'funeral/funeral-invite-guest-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Memorial hall',
                        className: 'memorial-hall',
                        imageUrl: 'funeral/funeral-memorial-hall.png',
                        mobileImageUrl: 'funeral/funeral-memorial-hall-mobile.jpg',
                        id: 4
                    }, {
                        name: 'Funeral merchandise',
                        className: 'funeral-merchandise',
                        imageUrl: 'funeral/funeral-merchandise.png',
                        mobileImageUrl: 'funeral/funeral-merchandise-mobile.jpg',
                        id: 7
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
                        mobileImageUrl: 'birthday/birthday-car-rent-mobile.jpg',
                        id: 1
                    }, {
                        name: 'Design the event',
                        className: 'design',
                        imageUrl: 'birthday/birthday-design.png',
                        mobileImageUrl: 'birthday/birthday-design-mobile.jpg',
                        id: 8
                    }, {
                        name: 'Animators',
                        className: 'animators',
                        imageUrl: 'birthday/birthday-animators.png',
                        mobileImageUrl: 'birthday/birthday-animators-mobile.jpg',
                        id: 6
                    }, {
                        name: 'Invite guest',
                        className: 'invite',
                        imageUrl: 'birthday/birthday-invite.jpg',
                        mobileImageUrl: 'birthday/birthday-invite-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'birthday/birthday-food-cort.jpg',
                        mobileImageUrl: 'birthday/birthday-food-cort-mobile.jpg',
                        id: 5
                    }, {
                        name: 'Places',
                        className: 'places',
                        imageUrl: 'birthday/birthday-places.jpg',
                        mobileImageUrl: 'birthday/birthday-places-mobile.jpg',
                        id: 2
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
                        mobileImageUrl: 'conference/conference-car-rent-mobile.jpg',
                        id: 1

                    }, {
                        name: 'Rent a hall',
                        className: 'hall',
                        imageUrl: 'conference/conference-rent-hall.jpg',
                        mobileImageUrl: 'conference/conference-rent-hall-mobile.jpg',
                        id: 2
                    }, {
                        name: 'Invite guests',
                        className: 'invite',
                        imageUrl: 'conference/conference-invite-guest.jpg',
                        mobileImageUrl: 'conference/conference-invite-guest-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Food courts',
                        className: 'food-courts',
                        imageUrl: 'conference/conference-food-cort.jpg',
                        mobileImageUrl: 'conference/conference-food-cort-mobile.jpg',
                        id: 5
                    }]
                }
            }])
        };

        const weddingServicesState = {
            name: 'wedding.services',
            url: '/services/:id',
            templateUrl: productsTemplate,
            controller: 'servicesCtrl'
        };

        const funeralServicesState = {
            name: 'funeral.services',
            url: '/services/:id',
            templateUrl: productsTemplate,
            controller: 'servicesCtrl'
        };

        const birthdayServicesState = {
            name: 'birthday.services',
            url: '/services/:id',
            templateUrl: productsTemplate,
            controller: 'servicesCtrl'
        };

        const conferenceServicesState = {
            name: 'conference.services',
            url: '/services/:id',
            templateUrl: productsTemplate,
            controller: 'servicesCtrl'
        };

        $stateProvider
            .state(weddingState)
            .state(funeralState)
            .state(birthdayState)
            .state(conferenceState)
            .state(weddingServicesState)
            .state(funeralServicesState)
            .state(birthdayServicesState)
            .state(conferenceServicesState)
    }])
    .component('eventComponent', require('./components/eventComponent/eventComponent.js'))
    .component('productItemComponent', require('./components/productItemComponent/productItem.js'))
    .controller('servicesCtrl', require('../../components/eventModule/servicesCtrl.js'))
    .factory('filterFactory', require('./filterFactory.js'))
    .name;