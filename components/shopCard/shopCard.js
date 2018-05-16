const angular = require('angular');
const template = require('./shopCard.html');
require('@uirouter/angularjs');
require('./shopCard.scss');



module.exports = angular.module('emApp.shopCard', ['ui.router'])
.config(function($stateProvider) {
    'ngInject';
    let stateCart = {
        name: 'shopCard',
        url:'/shop',
        templateUrl : template,

        controller:  (function ($scope, shoppingCartService, filterFactory, $http){
            'ngInject';
             $http.get('/getShoppingCartContent', {
                    params: {
                        user: filterFactory.userEmail
                    }
                }).then(function successCallback(response) {
                    $scope.order = response.data;
                }, function errorCallback(response) {
                    console.log('Error!!!');
                });
            $scope.imageStr = './images/';   
            $scope.createOrder = false;
            $scope.personList = filterFactory.personList;
            if($scope.personList) {
                $scope.personListIsExist = true;
                $scope.guestsQuantity = filterFactory.personList.length;
            }
            
            $scope.createOrderList = function () { //createOrderList
                 let finalOrder = [];
                 $scope.createOrder = true;
                 let array = $scope.order.services;
                for(let i=0, l=array.length; i<l; i++){
                    for(let k=0, m=array[i].items.length; k<m; k++){
                        finalOrder.push(array[i].items[k]);
                    }
                };
                $scope.sum = finalOrder.reduce((a,b)=>{
                    console.log(b.quantity,parseFloat(b.cost));
                   return a+(b.quantity*parseFloat(b.cost));
                },0);
                console.log( $scope.sum)
                return finalOrder;
            };

            $scope.handle = function (object,name,id) {
            console.log(object, filterFactory.disabledButtons);
                    if(object !== $scope.personList) {
                     shoppingCartService.removeFromCart(object);
                    }
               
                if(object === $scope.order.halls){
                    $scope.order.halls = null;
                }
                if(object === $scope.order.design){
                    $scope.order.design = null;
                }
                if(object === $scope.personList){
                    $scope.personList = null;
                }

                $scope.order.services = $scope.order.services.filter(function (item) {
                    if(item.name === name){
                        item.items = item.items.filter(function (a) {
                            return a.id!==id
                        });
                        return true;
                    }else {
                        return true
                    }
                });
            };

            $scope.totalAmountProduct = function(quantity,price){
                if(price==='invite'){
                    if(quantity <= 100){
                            return 100;
                        }else if(quantity > 100 && quantity <= 200){
                            return 150;
                        }else {
                            return 200;
                        }
                }
                return quantity*parseFloat(price);
            }
            

            $scope.totalAmount = function () {
                $scope.totalAll = 0;
                if($scope.personListIsExist){
                    $scope.totalAll += $scope.totalAmountInvitation;
                }
                if(!!$scope.order.halls){
                    $scope.totalAll += $scope.totalAmountHalls;
                }
                let array = $scope.order.services;
                for(let i=0, l=array.length; i<l; i++){
                    for(let k=0, m=array[i].items.length; k<m; k++){
                        $scope.totalAll+=array[i].items[k].cost* array[i].items[k].quantity;
                    }
                }
            };
        })
    };
    $stateProvider.state(stateCart);
})
.name;