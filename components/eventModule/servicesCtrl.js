module.exports = function ($scope, $stateParams, $state, filterFactory, $http) {
    'ngInject';
    filterFactory.currentService = $stateParams.id;
    if ($stateParams.id == 9 || $stateParams.id == 10) {
        if ($stateParams.id == 9) {
            filterFactory.gender = 'male';
        } else {
            filterFactory.gender = 'female';
        };
        $state.go('partners');
    } else if ($stateParams.id == 3) {
        $state.go('invitation');
    } else {
        $http.get('/getService', {
            params: {
                id: $stateParams.id
            }
        }).then(function successCallback(response) {
            $scope.currentService = response.data;
        }, function errorCallback(response) {
            console.log('Error!!!');
        });
    };
};