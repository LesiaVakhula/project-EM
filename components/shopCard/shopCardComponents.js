const angular = require('angular');
const template = require('./shopCardComponents.html');
require('@uirouter/angularjs');
require('./shopCardComponents.scss');

module.exports = angular.module('emApp.shopCard', ['ui.router'])
.config([
    '$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
.config(['$stateProvider',function($stateProvider) {
    var stateCart = {
        name: 'shopCard',
        url:'/shop',
        templateUrl : template
    };

    $stateProvider.state(stateCart);
}])
.name;