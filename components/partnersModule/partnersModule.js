const partnersTemplate = require('./partnersTemplate.html');
require('./partnersStyle.scss');

module.exports = angular.module('emApp.partners', ['ui.router'])
    .config(function ($stateProvider) {
        'ngInject';
        let partnersState = {
            name: 'partners',
            url: '/wedding/partners',
            templateUrl: partnersTemplate,
            controller: function ($scope, filterFactory, $http) {
                    'ngInject';
                    $scope.genderFilter = function (item) {
                        if (filterFactory.gender === 'male') {
                            return item.gender === 'male';
                        } else {
                            return item.gender === 'female';
                        };
                    };

                    $http.get('/getClothesPartners').then(function successCallback(response) {
                        $scope.partners = response.data;
                    }, function errorCallback(response) {
                        console.log('Error!!!');
                    });

                    let promoArr = null;
                    $scope.getDiscount = function (num) {
                        promoArr = num;
                        console.log(promoArr);
                    }
                }
        };
        $stateProvider.state(partnersState);
    })
    .name;