const partnersTemplate = require('./partnersTemplate.html');
require('./partnersStyle.scss');

module.exports = angular.module('emApp.partners', ['ui.router'])
    .config(['$stateProvider',function($stateProvider) {
        let partnersState = {
            name: 'partners',
            url:'/partners',
            templateUrl : partnersTemplate,
            controller: (['$scope', function ($scope) {
                $scope.partners = [
                    {
                        name: "Zefir-wedding",
                        url: "http://zefir-wedding.com",
                        promo: "20",
                        imgUrl:"zefir_wedding.jpg"
                    }, {
                        name: "Hadassa",
                        url: "http://hadassa.com.ua",
                        promo: "25",
                        imgUrl:"hadassa_1.jpg"
                    }, {
                        name: "Crystall",
                        url: "http://crystalsalon.com.ua",
                        promo: "18",
                        imgUrl:"crystall.jpg"
                    }, {
                        name: "AMmelin",
                        url: "http://amelin.in.ua",
                        promo: "25",
                        imgUrl:"amelin.jpg"
                    },
                    {
                        name: "Sergio Ellini",
                        url: "http://sergioellini.com.ua",
                        promo: "22",
                        imgUrl:"sergio_ellini.jpg"
                    },
                    {
                        name: "Arber",
                        url: "http://arber.ua/",
                        promo: "19",
                        imgUrl:"arber.jpg"
                    },
                    {
                        name: "Vels",
                        url: "http://shop.vels.ua",
                        promo: "23",
                        imgUrl:"vels.jpg"
                    },
                    {
                        name: "Voronin",
                        url: "https://online.voronin.ua",
                        promo: "25",
                        imgUrl:"voronin.jpg"
                    }
                ];
                let promoArr = null;
                $scope.getDiscount = function(num){
                    promoArr = num;
                    console.log(promoArr);
                }
        }])
    };
     $stateProvider.state(partnersState);
}])
.name;