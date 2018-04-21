const angular = require('angular');
import "./styles/style.scss";
import "bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

require('@uirouter/angularjs');
const home = require('../main/emAppMain.js');

module.exports = angular.module('emApp', ['ui.router', home])
.config([
	'$locationProvider',function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.component('footerComponent', require('./utils-components/footer/footerComponent.js'))
.component('headerComponent', require('./utils-components/header/headerComponent.js'));
