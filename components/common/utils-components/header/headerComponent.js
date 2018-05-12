const template = require('./headerTemplate.html');
const loginFormTemplate = require('../forms/loginFormTemplate.html');
const registrationFormTemplate = require('../forms/registrationFormTemplate.html');
require('./headerStyle.scss');

module.exports = {
	templateUrl: template,
	controller: function ($scope, ngDialog, filterFactory, $rootScope, shoppingCartService) {
		'ngInject';

		$scope.$on('sendUserLog', function (event, args) {
			$scope.isUser = args.isUser;
			$scope.userEmail = args.userEmail;
		});

		$scope.selectEvent = function ($event) {
			filterFactory.selectedEvent = $event.target.dataset.id;
			shoppingCartService.getUsersOrder($scope.userEmail, $event.target.dataset.id);
			$rootScope.$broadcast('sendSelectedEvent', {
				show: $event.target.dataset.id === filterFactory.currentEvent
			});
		};

		$scope.clickToOpenLoginForm = function () {
			ngDialog.open({
				templateUrl: loginFormTemplate,
				className: 'ngdialog-theme-default modal-view',
				controller: function ($scope, $http, filterFactory, $rootScope) {
					'ngInject';

					$scope.regError = false;

					$scope.signInFunc = function (valid) {
						$http.get('/getUser', {
							params: {
								email: $scope.userEmail,
								pass: $scope.userPass
							}
						}).then(function successCallback(response) {
							if (response.data) {
								$scope.regError = false;
								filterFactory.isUser = true;
								filterFactory.userEmail = response.data.email;
								$rootScope.$broadcast('sendUserLog', {
									isUser: true,
									userEmail: response.data.email
								});

								ngDialog.closeAll();
							} else {
								$scope.regError = true;
							}
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