const template = require('./eventActionTemplate.html');
require('./eventActionStyle.scss');

module.exports = {
	templateUrl: template,
	bindings: {
		data: '='
	},
	controller: function () {
		this.$onInit = () => {
		 this.imageUrl =  require(`../../images/${this.data.imageUrl}`);
		};
	}
};