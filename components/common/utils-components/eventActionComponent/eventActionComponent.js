const template = require('./eventActionTemplate.html');
require('./eventActionStyle.scss');

module.exports = {
	templateUrl: template,
	bindings: {
		data: '='
	},
	controller: function ($location) {
		this.$onInit = () => {
			this.imageUrl = require(`../../images/${this.data.imageUrl}`);
			if (this.data.mobileImageUrl) {
				this.mobileImageUrl = require(`../../images/${this.data.mobileImageUrl}`);
			} else {
				this.mobileImageUrl = this.imageUrl;
			};

			this.url = this.data.className;
			
			if (this.data.id) {
				this.url = `.services({id: ${this.data.id}})`
				
			};
		};
	}
};