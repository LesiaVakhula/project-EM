const template = require('./headerTemplate.html');
const loginFormTemplate = require('../forms/loginFormTemplate.html');
const registrationFormTemplate = require('../forms/registrationFormTemplate.html');
require('./headerStyle.scss');

module.exports = {
	templateUrl: template,
	controller: function ($scope, ngDialog, filterFactory, $rootScope, $state, shoppingCartService, $http, localStorageService, $cookies) {
		'ngInject';

		$http.get('/checkingUser')
			.then(function successCallback(response) {
				$scope.userEmail = response.data.user;
				$scope.isUser = true;
				localStorageService.set('email', response.data.user);
			}, function errorCallback(response) {
				console.log('Error!!!');
			});

		$scope.isLoggedUser = function () {
			return localStorageService.get('isUser');
		};

		$scope.$on('sendUserLog', function (event, args) {
			$scope.isUser = args.isUser;
			$scope.userEmail = args.userEmail;
		});

		$scope.selectEvent = function ($event) {

			if (localStorageService.get('selectedEvent')) {
				filterFactory.selectedEvent = localStorageService.get('selectedEvent');
			};
			let selectedEvent = $event.target.dataset.id;
			if (selectedEvent === filterFactory.selectedEvent) {
				return;
			}
			filterFactory.selectedEvent = selectedEvent;
			localStorageService.set('selectedEvent', $event.target.dataset.id);
			filterFactory.disabledButtons = [];
			localStorageService.set('disabledButtons', []);
			shoppingCartService.getUsersOrder($scope.userEmail, $event.target.dataset.id);

			if (!filterFactory.currentEvent) {
				filterFactory.currentEvent = localStorageService.get('currentEvent');
			};
			shoppingCartService.getUsersOrder($scope.userEmail, selectedEvent);
			shoppingCartService.checkGuestsList($scope.userEmail, selectedEvent);
			$rootScope.$broadcast('sendSelectedEvent', {
				show: $event.target.dataset.id === filterFactory.currentEvent
			});
		};

		$scope.clickToOpenLoginForm = function () {
			ngDialog.open({
				templateUrl: loginFormTemplate,
				className: 'ngdialog-theme-default modal-view',
				controller: function ($scope, $http, filterFactory, $rootScope, localStorageService) {
					'ngInject';

					$scope.regError = false;
					$scope.changePassForm = function () {
						$scope.regError = false;
					};

					$scope.signInFunc = function (isValid) {
						if (isValid) {
							$http.get('/getUser', {
								params: {
									email: $scope.userEmail,
									pass: $scope.userPass
								}
							}).then(function successCallback(response) {
								if (response.data) {
									$scope.regError = false;
									localStorageService.set('isUser', true);
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
					$scope.emailError = false;
					$scope.changeRegEmail = function () {
						$scope.emailError = false;
					};
					$scope.regExpPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
					$scope.regExpName = /^[a-z ,.'-]+$/i;
					$scope.signUpFunc = function (isValid) {
						if (isValid) {
							let registrationObj = {
								firstName: $scope.firstName,
								lastName: $scope.lastName,
								phoneNumber: $scope.phoneNumber,
								email: $scope.email,
								password: $scope.pass
							};

							$http.post('/setNewUser', registrationObj)
								.then(function successCallback(response) {
									if (response.data.email) {
										$scope.emailError = true;
									} else {
										ngDialog.closeAll();
									};
								}, function errorCallback(response) {
									console.log('Error!!!');
								});
						};
					};
				}
			});
		};

		$scope.logOutFunc = function () {
			$scope.isUser = false;
			$http.post('/clearOrder', {
					user: localStorageService.get('email')
				})
				.then(function successCallback(response) {}, function errorCallback(response) {
					console.log('Error!!!');
				});
			localStorageService.clearAll();
			$state.go('home');
			localStorageService.currentEvent = '';
			localStorageService.selectedEvent = '';
			localStorageService.isUser = false;
			localStorageService.userEmail = '';
			localStorageService.disabledButtons = [];
		};
	}
};