const template = require('./headerTemplate.html');
const loginFormTemplate = require('../forms/loginFormTemplate.html');
const registrationFormTemplate = require('../forms/registrationFormTemplate.html');
require('./headerStyle.scss');

module.exports = {
    templateUrl: template,
    controller: function($scope, ngDialog) {
    	'ngInject';
    	$scope.clickToOpenLoginForm = function() {
    		ngDialog.open({ templateUrl: loginFormTemplate, className: 'ngdialog-theme-default modal-view'});
    	};

    	$scope.clickToOpenRegistrationForm = function() {
    		ngDialog.open({ templateUrl: registrationFormTemplate, className: 'ngdialog-theme-default modal-view'});
    	};
    }
};