const angular = require('angular');
const template = require('./shopCard.html');
const controllerShop = require('./shopCardController');
require('@uirouter/angularjs');
require('./shopCard.scss');

module.exports = angular.module('emApp.shopCard', ['ui.router'])
.config(['$stateProvider',function($stateProvider) {
    var stateCart = {
        name: 'shopCard',
        url:'/shop',
        templateUrl : template,
        controller:  (['$scope', function ($scope){

            // $scope.order = controllerShop;
            $scope.order = {
                eventName: "Funeral",
                services:[
                    {
                        name:"Rent Car",
                        items: [
                            {
                                id:"1",
                                name:"Bently",
                                photo:"url...",
                                cost:100,
                                drivers:true
                            }
                        ]
                    }
                ]
            }
        }])
    };

    $stateProvider.state(stateCart);
}])
.name;