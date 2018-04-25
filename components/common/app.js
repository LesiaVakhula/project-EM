const angular = require('angular');
const home = require('../main/emAppMain.js');
const shopCard = require('../shopCard/shopCard.js');
const eventPage = require('../eventModule/eventModule.js');
require ("bootstrap");
require('@uirouter/angularjs');


// ------------ styles
require( '../../node_modules/bootstrap/dist/css/bootstrap.css');
require ("./styles/style.scss");

module.exports = angular.module('emApp', ['ui.router', home, shopCard, eventPage])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false })}
    ])
    .run(['$rootScope', '$state', '$stateParams',
        function($rootScope, $state, $stateParams) {
            //this solves page refresh and getting back to state
            $rootScope.$state = $state;
        }])
.component('footerComponent', require('./utils-components/footer/footerComponent.js'))
    .component('headerComponent', require('./utils-components/header/headerComponent'));