const template = require('./eventActionTemplate.html');
require('./eventActionStyle.scss');

module.exports = {
	templateUrl: template,
	bindings: {
		data: '='
	},
	controller: function () {
		this.$onChanges = (old, newVal) => {};
	}
};