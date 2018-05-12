const partnersTemplate = require('./partnersTemplate.html');
require('./partnersStyle.scss');

module.exports = angular.module('emApp.partners', ['ui.router'])
    .config(['$stateProvider', function($stateProvider) {
        let partnersState = {
            name: 'partners',
            url: '/wedding/partners',
            templateUrl: partnersTemplate,
            controller: (['$scope', 'filterFactory', function($scope, filterFactory) {

                $scope.genderFilter = function(item) {
                    if (filterFactory.gender === 'male') {
                        return item.gender === 'male';
                    } else {
                        return item.gender === 'female';
                    }

                }

                $scope.partners = [{
                        name: "Zefir-wedding",
                        gender: "female",
                        url: "http://zefir-wedding.com",
                        promo: "20",
                        imgUrl: "./images/zefir_wedding.jpg"
                    }, {
                        name: "Hadassa",
                        gender: "female",
                        url: "http://hadassa.com.ua",
                        promo: "25",
                        imgUrl: "./images/hadassa_1.jpg"
                    }, {
                        name: "Crystall",
                        gender: "female",
                        url: "http://crystalsalon.com.ua",
                        promo: "18",
                        imgUrl: "./images/crystall.jpg"
                    }, {
                        name: "AMmelin",
                        gender: "female",
                        url: "http://amelin.in.ua",
                        promo: "25",
                        imgUrl: "./images/amelin.jpg"
                    },
                    {
                        name: "Sergio Ellini",
                        gender: "male",
                        url: "http://sergioellini.com.ua",
                        promo: "22",
                        imgUrl: "./images/sergio_ellini.jpg"
                    },
                    {
                        name: "Arber",
                        gender: "male",
                        url: "http://arber.ua/",
                        promo: "19",
                        imgUrl: "./images/arber.jpg"
                    },
                    {
                        name: "Vels",
                        gender: "male",
                        url: "http://shop.vels.ua",
                        promo: "23",
                        imgUrl: "./images/vels.jpg"
                    },
                    {
                        name: "Voronin",
                        gender: "male",
                        url: "https://online.voronin.ua",
                        promo: "25",
                        imgUrl: "./images/voronin.jpg"
                    }
                ];
                let promoArr = null;
                $scope.getDiscount = function(num) {
                    promoArr = num;
                    console.log(promoArr);
                }
            }])
        };
        $stateProvider.state(partnersState);
    }])
    .name;