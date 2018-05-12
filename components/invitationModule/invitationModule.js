const invitationTemplate = require('./invitationTemplate.html');
require('./invitationStyle.scss');

module.exports = angular.module('emApp.invitation', ['ui.router'])
    .value('froalaConfig', {
        toolbarInline: false,
        placeholderText: 'Enter Text Here'
    })
    .config(['$stateProvider',function($stateProvider) {
        let invitationState = {
            name: 'invitation',
            url:'/invitation',
            templateUrl : invitationTemplate,
            controller: (['$scope', function ($scope) {
                // $scope.myHtml = "<h1>Hello World</h1>"
                $scope.froalaOptions = {
                    toolbarButtons : ["bold", "italic", "underline", "|", "align", "formatOL", "formatUL"],
                    events: {
                        'froalaEditor.initialized': function () {
                            // Use the methods like this.
                            $scope.froalaOptions.froalaEditor('selection.get');
                        }
                    }
                };
                $scope.backgroundTemplate = './images/background7.jpg';
                $scope.iputText = '';
                $scope.personList = [];
                $scope.flag = false;
                $scope.pattern_email=/[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*/;
                $scope.pattern_phone=/^\d{10}$/;
                // $scope.formName = {};
                let count = 1;
                function goodLook(num) {
                    if(num <= 9){
                        return '0' + num;
                    }
                    return num;
                };
                $scope.getDate = function (date) {
                    if(!date){return}
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
                $scope.addPerson = function(){
                    if(!$scope.name || !$scope.lastName || !$scope.email || !$scope.phone){
                        return;
                    }

                    $scope.personList.push({name: $scope.name, lastName: $scope.lastName, email: $scope.email, phone: $scope.phone,count: count++});
                    $scope.name = '';
                    $scope.lastName = '';
                    $scope.email = '';
                    $scope.phone = null;
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