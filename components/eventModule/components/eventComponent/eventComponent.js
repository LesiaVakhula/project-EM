const eventTemplate = require('./eventTemplate.html');
require('./eventStyle.scss');

module.exports = {
    templateUrl: eventTemplate,
    bindings: {
        event: '<eventObject'
    },
    controller: function () {
        
        this.$onChanges = () => {
        }
    }
};