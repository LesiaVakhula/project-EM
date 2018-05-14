const template = require('./productItemTemplate.html');
require('./productItemStyle.scss');

module.exports = {
    templateUrl: template,
    bindings: {
        data: '=',
        name: '=',
        owner: '=',
        index: '='
    },
    controller: function($scope, $rootScope, shoppingCartService, filterFactory) {
        'ngInject';
        $scope.showAddButton = filterFactory.currentEvent === filterFactory.selectedEvent;
        $scope.$on('sendSelectedEvent', function(event, args) {
            $scope.showAddButton = args.show;
        });

        this.$onInit = () => {
            this.imageUrl = require(`../../../common/images/productItemImages/${this.data.image}`);
            this.buttons = angular.element(document.querySelectorAll('.add-btn'));

            for(let i = 0; i< this.buttons.length; i++) {
                if(filterFactory.disabledButtons.some( 
                    item => item.id == i 
                    && item.event === filterFactory.currentEvent && 
                    item.name === filterFactory.currentService)) {
                    this.buttons[i].setAttribute('disabled', true);
                }
            }

            this.addToCart = function(item, serviceName, owner, $event) {
                $event.target.setAttribute('disabled', true);
                filterFactory.disabledButtons.push({
                    event: filterFactory.currentEvent, 
                    name: filterFactory.currentService, 
                    id: $event.currentTarget.dataset.id});
                shoppingCartService.addToCart(item, serviceName, owner);
            }
        }
    }
};