const angular = require('angular');
const template = require('./eventModule.html');
const partners = require('../partnersModule/partnersModule');
const productsTemplate = require('./productsTemplate.html');
const invitation = require('../invitationModule/invitationModule')
require('@uirouter/angularjs');

module.exports = angular.module('emApp.Event', ['ui.router', partners, invitation])
    .config(function ($stateProvider) {
    'ngInject';

        const eventState = {
            name:'event',
            url:'/:eventName',
            templateUrl: template,
            controller: function ($scope, $stateParams) {
                'ngInject';
                $scope.name = $stateParams.eventName;
                $scope.events = [
                    {
                    name: 'wedding',
                    services: [{
                        name: 'Wedding suits',
                        stateTo: '.services({id: "9"})',
                        className: 'wedding-suits vertical-2',
                        imageUrl: 'wedding/wedding-suits.jpg',
                        mobileImageUrl: 'wedding/wedding-suits-mobile.jpg',
                        id: 9
                    }, {
                        name: 'Repast hall',
                        stateTo: '.services({id: "2"})',
                        className: 'repast-hall horizontal-2',
                        imageUrl: 'wedding/wedding-repast-hall.jpg',
                        mobileImageUrl: 'wedding/wedding-repast-hall-mobile.jpg',
                        id: 2

                    }, {
                        name: 'Car hire',
                        stateTo: '.services({id: "1"})',
                        className: 'car-hire horizontal-1',
                        imageUrl: 'wedding/wedding-car-hire.png',
                        mobileImageUrl: 'wedding/wedding-car-hire-mobile.jpg',
                        id: 1
                    }, {
                        name: 'Wedding dresses',
                        stateTo: '.services({id: "10"})',
                        className: 'wedding-dresses vertical-2',
                        imageUrl: 'wedding/wedding-dresses.jpg',
                        mobileImageUrl: 'wedding/wedding-dresses-mobile.jpg',
                        id: 10
                    }, {
                        name: 'Guest invitation' ,
                        stateTo: '.services({id: "3"})',
                        className: 'guest-invitation horizontal-1',
                        imageUrl: 'wedding/wedding-guest-invitation.jpg',
                        mobileImageUrl: 'wedding/wedding-guest-invitation-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Unique organization',
                        stateTo: '.services({id: "8"})',
                        className: 'unique-organization horizontal-2',
                        imageUrl: 'wedding/wedding-unique-organization.jpeg',
                        mobileImageUrl: 'wedding/wedding-unique-organization-mobile.jpg',
                        id: 8
                    }]
                },
                {
                    name: 'birthday',
                    services: [{
                        name: 'Choose car for a rent',
                        stateTo: '.services({id: "1"})',
                        className: 'car-rent',
                        imageUrl: 'birthday/birthday-car-rent.png',
                        mobileImageUrl: 'birthday/birthday-car-rent-mobile.jpg',
                        id: 1
                    }, {
                        name: 'Design the event',
                        stateTo: '.services({id: "8"})',
                        className: 'design',
                        imageUrl: 'birthday/birthday-design.png',
                        mobileImageUrl: 'birthday/birthday-design-mobile.jpg',
                        id: 8
                    }, {
                        name: 'Animators',
                        stateTo: '.services({id: "6"})',
                        className: 'animators',
                        imageUrl: 'birthday/birthday-animators.png',
                        mobileImageUrl: 'birthday/birthday-animators-mobile.jpg',
                        id: 6
                    }, {
                        name: 'Invite guest',
                        stateTo: '.services({id: "3"})',
                        className: 'invite',
                        imageUrl: 'birthday/birthday-invite.jpg',
                        mobileImageUrl: 'birthday/birthday-invite-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Food courts',
                        stateTo: '.services({id: "5"})',
                        className: 'food-courts',
                        imageUrl: 'birthday/birthday-food-cort.jpg',
                        mobileImageUrl: 'birthday/birthday-food-cort-mobile.jpg',
                        id: 5
                    }, {
                        name: 'Places',
                        stateTo: '.services({id: "2"})',
                        className: 'places',
                        imageUrl: 'birthday/birthday-places.jpg',
                        mobileImageUrl: 'birthday/birthday-places-mobile.jpg',
                        id: 2
                    }]
                },{
                    name: 'funeral',
                    services: [{
                        name: 'Choose car for a rent',
                        stateTo: '.services({id: "11"})',
                        className: 'car-rent',
                        imageUrl: 'funeral/funeral-car-rent.png',
                        mobileImageUrl: 'funeral/funeral-car-rent-mobile.jpg',
                        id: 11
                    }, {
                        name: 'Repast hall',
                        stateTo: '.services({id: "2"})',
                        className: 'repast-hall',
                        imageUrl: 'funeral/funeral-repast-hall.png',
                        mobileImageUrl: 'funeral/funeral-repast-hall-mobile.jpg',
                        id: 2
                    }, {
                        name: 'Invite guests',
                        stateTo: '.services({id: "3"})',
                        className: 'invite',
                        imageUrl: 'funeral/funeral-invite-guest.png',
                        mobileImageUrl: 'funeral/funeral-invite-guest-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Memorial hall',
                        stateTo: '.services({id: "4"})',
                        className: 'memorial-hall',
                        imageUrl: 'funeral/funeral-memorial-hall.png',
                        mobileImageUrl: 'funeral/funeral-memorial-hall-mobile.jpg',
                        id: 4
                    }, {
                        name: 'Funeral merchandise',
                        stateTo: '.services({id: "7"})',
                        className: 'funeral-merchandise',
                        imageUrl: 'funeral/funeral-merchandise.png',
                        mobileImageUrl: 'funeral/funeral-merchandise-mobile.jpg',
                        id: 7
                    }]
                },
                {
                    name: 'conference',
                    services: [{
                        name: 'Choose car for a rent',
                        stateTo: '.services({id: "1"})',
                        className: 'car-rent',
                        imageUrl: 'conference/conference-car-rent.jpeg',
                        mobileImageUrl: 'conference/conference-car-rent-mobile.jpg',
                        id: 1
                    }, {
                        name: 'Rent a hall',
                        stateTo: '.services({id: "2"})',
                        className: 'hall',
                        imageUrl: 'conference/conference-rent-hall.jpg',
                        mobileImageUrl: 'conference/conference-rent-hall-mobile.jpg',
                        id: 2
                    }, {
                        name: 'Invite guests',
                        stateTo: '.services({id: "3"})',
                        className: 'invite',
                        imageUrl: 'conference/conference-invite-guest.jpg',
                        mobileImageUrl: 'conference/conference-invite-guest-mobile.jpg',
                        id: 3
                    }, {
                        name: 'Food courts',
                        stateTo: '.services({id: "5"})',
                        className: 'food-courts',
                        imageUrl: 'conference/conference-food-cort.jpg',
                        mobileImageUrl: 'conference/conference-food-cort-mobile.jpg',
                        id: 5
                    }]
                }
                 ]
                  $scope.currentEvent =  $scope.events.find((item) => item.name === $scope.name) 
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
    .factory('filterFactory', require('./filterFactory.js'))
    .name;