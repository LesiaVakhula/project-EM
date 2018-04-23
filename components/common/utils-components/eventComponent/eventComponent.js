const eventTemplate = require('./eventTemplate.html');
require('./eventStyle.scss');
module.exports = {
    templateUrl: eventTemplate,
    bindings: {
        event: '='
    },
    controller: ['$scope', function ($scope) {
    }]
};