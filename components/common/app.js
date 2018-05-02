const angular = require('angular');
const home = require('../home/emAppHome.js');
const shopCard = require('../shopCard/shopCard.js');
const eventPage = require('../eventModule/eventModule.js');
require("bootstrap");
require('@uirouter/angularjs');


// ------------ styles
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require("./styles/style.scss");

module.exports = angular.module('emApp', ['ui.router', home, shopCard, eventPage])
    .config(function ($locationProvider) {
        'ngInject';
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
    })
    .run(
        function ($rootScope, $state, $stateParams) {
            'ngInject';
            //this solves page refresh and getting back to state
            $rootScope.$state = $state;
        })
    .component('footerComponent', require('./utils-components/footer/footerComponent.js'))
    .component('headerComponent', require('./utils-components/header/headerComponent.js'));