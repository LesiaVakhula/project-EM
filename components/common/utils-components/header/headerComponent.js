const template = require('./headerTemplate.html');
require('./headerStyle.scss');
module.exports = {
    templateUrl: template}
// .config(['$routeProvider',
//     function($routeProvider) {
//         $routeProvider.
//         when('/shopingcard', {
//             // templateUrl: 'partials/phone-list.html',
//             controller: 'shopCardApp'}).
//         otherwise({
//             redirectTo: '/shopingcard'
//         });
//     }]);