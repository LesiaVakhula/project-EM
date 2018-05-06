const template = require('./headerTemplate.html');
const loginFormTemplate = require('../forms/loginFormTemplate.html');
const registrationFormTemplate = require('../forms/registrationFormTemplate.html');
require('./headerStyle.scss');

module.exports = {
	templateUrl: template,
	controller: function ($scope, ngDialog) {
		'ngInject';
		$scope.clickToOpenLoginForm = function () {
			ngDialog.open({
				templateUrl: loginFormTemplate,
				className: 'ngdialog-theme-default modal-view',
				controller: function ($scope, $http) {
					'ngInject';

					$scope.signInFunc = function (valid) {
						$http.get('/getUser', {
							params: {
								email: $scope.userEmail,
								pass: $scope.userPass
							}
						}).then(function successCallback(response) {
							if (response.data) {
								$scope.isUser = true;
								$scope.currentFirstName = response.data.firstName;
								$scope.currentLastName = response.data.lastName;
								$scope.currentEmail = response.data.email;
								$scope.currentPhoneNumber = response.data.phoneNumber;
								console.log('You are registered')
							};
						}, function errorCallback(response) {
							console.log('Error!!!');
						});
					};
				}
			});
		};

		$scope.clickToOpenRegistrationForm = function () {
			ngDialog.open({
				templateUrl: registrationFormTemplate,
				className: 'ngdialog-theme-default modal-view',
				controller: function ($scope, $http) {
					'ngInject';
					$scope.signUpFunc = function () {

						let registrationObj = {
							firstName: $scope.firstName,
							lastName: $scope.lastName,
							phoneNumber: $scope.phoneNumber,
							email: $scope.email,
							password: $scope.pass
						};

						$http.post('/setNewUser', registrationObj)
							.then(function successCallback(response) {
								ngDialog.closeAll();
							}, function errorCallback(response) {
								console.log('Error!!!');
							});
					};
				}
			});
		};
	}
};