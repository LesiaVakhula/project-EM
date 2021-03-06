const angular = require('angular');
const template = require('./shopCard.html');
require('@uirouter/angularjs');
require('./shopCard.scss');



module.exports = angular.module('emApp.shopCard', ['ui.router'])
    .config(function ($stateProvider) {
        'ngInject';
        let stateCart = {
            name: 'shopCard',
            url: '/shop',
            templateUrl: template,

            controller: (function ($scope, shoppingCartService, filterFactory, $http, localStorageService) {
                'ngInject';
                $http.get('/getShoppingCartContent', {
                    params: {
                        user: filterFactory.userEmail || localStorageService.get('email')
                    }
                }).then(function successCallback(response) {
                    $scope.order = response.data;
                    $scope.billCalculation();
                }, function errorCallback(response) {
                    console.log('Error!!!');
                });
                $scope.personListIsExist = false;
                $scope.billCalculation = function () {
                    $scope.imageStr = './images/';
                    $scope.createOrder = false;
                    let halls = 0;
                    $scope.personList = filterFactory.personList;
                    //$scope.personList = localStorageService.get('personList');
                    if ($scope.personList.length) {
                        $scope.personListIsExist = true;
                        $scope.guestsQuantity = filterFactory.personList.length;
                    }
                    $scope.quantityProduct = 1;
                    $scope.createOrderList = function () {
                        let finalOrder = [];
                        $scope.createOrder = true;
                        let array = $scope.order.services;
                        for (let i = 0, l = array.length; i < l; i++) {
                            for (let k = 0, m = array[i].items.length; k < m; k++) {
                                finalOrder.push(array[i].items[k]);
                            }
                        };
                        $scope.sum = finalOrder.reduce((a, b) => {
                            return a + parseFloat(b.cost);
                        }, 0);
                        return finalOrder;
                    };


                    $scope.handle = function (object, name, id) {
                   
                        if (object !== $scope.personList) {                          
                            shoppingCartService.removeFromCart(object, name, id);
                        } else {
                            $scope.personListIsExist = false;
                            filterFactory.personList = [];
                            $scope.guestsQuantity = 0;
                            localStorageService.set('personList', []);
                            shoppingCartService.checkGuestsList(filterFactory.userEmail, filterFactory.selectedEvent);
                        }
                        if (object === $scope.order.halls) {
                            $scope.order.halls = null;
                        }
                        if (object === $scope.order.design) {
                            $scope.order.design = null;
                        }
                        if (object === $scope.personList) {
                            $scope.personList = null;
                        }

                        if (object === $scope.order['memorial-halls']) {
                            $scope.order['memorial-halls'] = null;
                        }
                        if (object === $scope.order['food-courts']) {
                            $scope.order['food-courts'] = null;
                        }

                        $scope.order.services = $scope.order.services.filter(function (item) {
                            if (item.name === name) {
                                item.items = item.items.filter(function (a) {
                                    return a.id !== id
                                });
                                return true;
                            } else {
                                return true
                            }
                        });
                    };

                    $scope.totalAmountHalls = function (quantity, price) {
                        halls = $scope.totalAmountProduct(quantity, price);
                        return halls
                    }
                    $scope.totalAmountProduct = function (quantity, price) {
                        quantity ? quantity : quantity = 0;
                        if (price === 'invite') {
                            if (quantity <= 100) {
                                return 100;
                            } else if (quantity > 100 && quantity <= 200) {
                                return 150;
                            } else {
                                return 200;
                            };
                        };
                        return quantity * parseFloat(price);
                    };
                    $scope.totalAmountInvitation = $scope.totalAmountProduct($scope.guestsQuantity,'invite')
                    $scope.totalAmount = function () {
                        $scope.totalAll = 0;
                        if ($scope.personListIsExist) {
                            $scope.totalAll += $scope.totalAmountInvitation ? $scope.totalAmountInvitation : 0;
                        };

                        if ($scope.order.halls) {
                            $scope.totalAll += halls;
                        };
                        let array = $scope.order.services;
                        if(!array){
                            return;
                        };
                        for (let i = 0, l = array.length; i < l; i++) {
                            for (let k = 0, m = array[i].items.length; k < m; k++) {
                                $scope.totalAll += parseFloat(array[i].items[k].cost);
                            };
                        };
                        return $scope.totalAll;
                    };
                    $scope.closeModal = function () {
                        $scope.createOrder = false;
                    };

                    $scope.confirmOrder = function(){
                        $scope.createOrder = false;
                        $scope.showOrderList = false;
                    }
                };
            })
        };
        $stateProvider.state(stateCart);
    })
    .name;