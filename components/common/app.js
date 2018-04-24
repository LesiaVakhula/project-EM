const angular = require('angular');
import "./styles/style.scss";
require('@uirouter/angularjs');
import "bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

require('@uirouter/angularjs');
const home = require('../main/emAppMain.js');
const shopCard = require('../shopCard/shopCard.js');
const eventPage = require('../main/eventModule.js')


module.exports = angular.module('emApp', ['ui.router', home, shopCard, eventPage])
.config([
	'$locationProvider',function($locationProvider) {
  $locationProvider.html5Mode(true);
}])
.component('footerComponent', require('./utils-components/footer/footerComponent.js'))
    .component('headerComponent', require('./utils-components/header/headerComponent'));