const angular = require('angular');
const template = require('./shopCard.html');
// const controllerShop = require('./shopCardController');
require('@uirouter/angularjs');
require('./shopCard.scss');

module.exports = angular.module('emApp.shopCard', ['ui.router']) //'shoppingCartService'
.config(['$stateProvider',function($stateProvider) {
    let stateCart = {
        name: 'shopCard',
        url:'/shop',
        templateUrl : template,
        controller:  (['$scope', function ($scope){
           // $scope.quantity =1;
            $scope.order = {
                eventName: "Funeral",
                invitationGuest:{
                    exist: true,
                    quantityGuest: 100
                },
                services:[
                    {
                        name:"Rent Car",
                        items: [
                            {
                                id:"1",
                                name:"Bently",
                                imgUrl:"./images/camry-black.png",
                                amount: 3,
                                color:"black",
                                quantity: 1,
                                cost:100
                            },{
                                id:"2",
                                name:"Camry",
                                imgUrl:"./images/camry-black.png",
                                color:"white",
                                amount: 2,
                                quantity: 1,
                                cost:100
                            }
                        ]
                    },
                    {
                        name: "Accessories",
                        items: [
                            {
                                id:"1",
                                name:"dgsdg",
                                imgUrl:"./images/camry-black.png",
                                color:"white",
                                amount: 3,
                                quantity:1,
                                cost:100
                            },{
                                id:"2",
                                name:"Candle",
                                imgUrl:"./images/camry-black.png",
                                color:"white",
                                amount: 2,
                                quantity:1,
                                cost:150
                            }
                        ]
                    }
                ]
            };
            $scope.createOrder = false;
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
                   return a+(b.quantity*b.cost)
                },0);
                return finalOrder;
            };
            $scope.handle = function (name,id) {


                $scope.order.services =$scope.order.services.filter(function (item) {
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
                if($scope.order.invitationGuest.quantityGuest<=100){
                    $scope.guestCoast = 100;
                }else if($scope.order.invitationGuest.quantityGuest > 100 && $scope.order.invitationGuest.quantityGuest <= 200){
                    $scope.guestCoast = 150;
                }else {
                    $scope.guestCoast = 200;
                }

            $scope.totalAmount = function () {
                $scope.totalAll = 0;
                if($scope.order.invitationGuest.exist){
                    $scope.totalAll+=$scope.guestCoast;
                }
                let array = $scope.order.services;
                for(let i=0, l=array.length; i<l; i++){
                       // console.log( array[i].name)
                    for(let k=0, m=array[i].items.length; k<m; k++){
                        $scope.totalAll+=array[i].items[k].cost* array[i].items[k].quantity;
                    }
                }
            };
        }])
    };
    $stateProvider.state(stateCart);
}])
.name;