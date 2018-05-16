const angular = require('angular');
const home = require('../home/emAppHome.js');
const shopCard = require('../shopCard/shopCard.js');
const shoppingCartService = require('../eventModule/shoppingCartService');
const eventPage = require('../eventModule/eventModule.js');
require("bootstrap");
require('@uirouter/angularjs');
require('ng-dialog');
require('angular-cookies');
require('angular-local-storage');

// ------------ styles
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../node_modules/ng-dialog/css/ngDialog.min.css');
require('../../node_modules/ng-dialog/css/ngDialog-theme-default.min.css');
require("./styles/style.scss");

module.exports = angular.module('emApp', ['ui.router', 'ngDialog', 'ngCookies', 'LocalStorageModule', home, shopCard, eventPage])
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
    .service('shoppingCartService', shoppingCartService)
    .factory('filterFactory', require('../eventModule/filterFactory.js'))
    .component('footerComponent', require('./utils-components/footer/footerComponent.js'))
    .component('headerComponent', require('./utils-components/header/headerComponent.js'));