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
    controller: function($scope, $rootScope, shoppingCartService, filterFactory, localStorageService) {
        'ngInject';
        //$scope.showAddButton = filterFactory.currentEvent === filterFactory.selectedEvent;
        $scope.$on('sendSelectedEvent', function(event, args) {
            $scope.showAddButton = args.show;
        });
        $scope.showAddButton = localStorageService.get('currentEvent') === localStorageService.get('selectedEvent');
        if (!filterFactory.currentEvent) {
            filterFactory.currentEvent = localStorageService.get('currentEvent');
        };

        if (!filterFactory.currentService) {
            filterFactory.currentService = localStorageService.get('selectedEvent');
        };

        if (localStorageService.get('disabledButtons')) {
            filterFactory.disabledButtons = localStorageService.get('disabledButtons');
        };

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
                console.log($event.target.dataset.id);
                $event.target.setAttribute('disabled', true);
                filterFactory.disabledButtons.push({
                    event: filterFactory.currentEvent, 
                    name: filterFactory.currentService, 
                    id: $event.currentTarget.dataset.id});

                localStorageService.set('disabledButtons', filterFactory.disabledButtons);
                shoppingCartService.addToCart(item, serviceName, owner);
            }
        }
    }
};