const template = require('./productItemTemplate.html');
require('./productItemStyle.scss');

module.exports = {
    templateUrl: template,
    bindings: {
        data: '='
    },
    controller: function () {
        this.$onInit = () => {
            this.imageUrl = require(`../../../common/images/productItemImages/${this.data.image}`);
            //Додати на клік $http і post запит в json
            this.addToCart = function (itemId) {
                //$http.post()
                console.log(itemId);
            }
        }
    }
};