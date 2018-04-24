const angular = require('angular');
import "./styles/style.scss";
require('@uirouter/angularjs');
const home = require('../main/emAppMain.js');
const eventPage = require('../main/eventModule.js')


module.exports = angular.module('emApp', ['ui.router', home, eventPage])
.config([
	'$locationProvider',function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.component('footerComponent', require('./utils-components/footer/footerComponent.js'));