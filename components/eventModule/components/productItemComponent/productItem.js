const template = require('./productItemTemplate.html');
require('./productItemStyle.scss');

module.exports = {
    templateUrl: template,
    bindings: {
        data: '=',
        name: '='
    },
    controller: function($scope, $rootScope, shoppingCartService, filterFactory) {
        'ngInject';
        $scope.showAddButton = filterFactory.currentEvent === filterFactory.selectedEvent;
        $scope.$on('sendSelectedEvent', function(event, args) {
            $scope.showAddButton = args.show;
        });
        this.$onInit = () => {
            this.imageUrl = require(`../../../common/images/productItemImages/${this.data.image}`);
            this.addToCart = function(item, eventName) {
                shoppingCartService.addToCart(item, eventName);
            }
        }
    }
};