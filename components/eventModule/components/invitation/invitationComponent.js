const invitationTemplate = require('./invitatinTemplate.html');
require('./invitationStyle.scss');

module.exports = angular.module('emApp.invitation', ['ui.router'])
    .config(['$stateProvider',function($stateProvider) {
        let invitationState = {
            name: 'invitation',
            url:'/invitation',
            templateUrl : invitationTemplate,
            controller: (['$scope', function ($scope) {
                $scope.backgroundTemplate = './images/background7.jpg';
                $scope.iputText = '';
                $scope.personList = [];
                $scope.flag = false;
                let count = 1;
                function goodLook(num) {
                    if(num <= 9){
                        return '0' + num;
                    }
                    return num;
                };
                $scope.getDate = function (date) {
                    let dateFull = new Date(date);
                    let newDate = {
                        day: goodLook(dateFull.getDate()),
                        month: goodLook(dateFull.getMonth()+1),
                        year: goodLook(dateFull.getFullYear()),
                        hour: goodLook(dateFull.getHours()),
                        minutes: goodLook(dateFull.getMinutes())
                    };
                    if(newDate.day && newDate.month && newDate.year && newDate.hour && newDate.minutes){
                        $scope.flag = true;
                    }
                    return newDate;
                };
                $scope.addPerson = function(name, lastName, email, phone){
                    if(!name || !lastName || !email || !phone){
                        return;
                    }

                    $scope.personList.push({name: name, lastName: lastName, email: email, phone: phone,count: count++});
                    console.log( $scope.personList);
                };
                $scope.removePerson = function (count) {
                    let elem = $scope.personList.find(item =>{
                        return item.count === count;
                    });
                    let index = $scope.personList.indexOf(elem);
                    $scope.personList.splice(index,1);
                    console.log($scope.personList);
                }
            }])
        };
        $stateProvider.state(invitationState);
    }])
    .name;