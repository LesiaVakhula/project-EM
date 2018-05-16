const eventTemplate = require('./eventTemplate.html');
require('./eventStyle.scss');

module.exports = {
    templateUrl: eventTemplate,
    bindings: {
        event: '<eventObject'
    },
    controller: function () {
        this.$onChange = () => {
            console.log(this.event)
            this.bannerClassName = `banner-${this.event.name}`;
            this.serviceClassName = `service-${this.event.services.length}`
        }
    }
};