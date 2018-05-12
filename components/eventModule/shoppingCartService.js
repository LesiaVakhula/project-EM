module.exports = function($http, filterFactory) {
    'ngIngject';

    this.getUsersOrder = function(userName, eventName) {

        $http.get('/getUsersOrder', {
                params: {
                    userName: userName,
                    eventName: eventName
                }
            })
            .then(function successCallback(response) {
                let orderExists = response.data;
                if (!orderExists) {
                    createOrderPattern(userName, eventName);
                }
            }, function errorCallback(response) {
                console.log('Error!!!');
            });
    }


    function createOrderPattern(user, eventName) {
        let orderPattern = {
            user: user,
            eventName: eventName,
            invitationGuest:{
                    exist: true,
                    quantityGuest: 0
            },
            services: []
        };
        if (eventName === "funeral") {
            orderPattern.services = [{
                name: "funeral-cars",
                items: []
            }, {
                name: "funeral-merchandise",
                items: []
            }];
        } else if (eventName === "birthday") {
            orderPattern.services = [{
                name: "cars",
                items: []
            }, {
                name: "animators",
                items: []
            }];
        } else {
            orderPattern.services = [{
                name: "cars",
                items: []
            }];
        }

        $http.post('/addOrderPattern', orderPattern)
            .then(function successCallback(response) {
                console.log('Added');
            }, function errorCallback(response) {
                console.log('Error!!!');
            });
    }

    this.addToCart = function(item, serviceName, owner) {
        let order = {
            name: serviceName,
            service: item,
            owner: owner,
            userEmail: filterFactory.userEmail
        };
        $http.post('/addItemToOrder', order)
            .then(function successCallback(response) {
                console.log('Added');
            }, function errorCallback(response) {
                console.log('Error!!!');
            });
    }

    this.removeFromCart = function(item, eventName) {
        let itemToDelete = {
            name: eventName,
            service: item
        };
        $http.delete('/removeItemFromOrder', itemToDelete)
            .then(function successCallback(response) {
                console.log('deleted');
            }, function errorCallback(response) {
                console.log('Error!!!');
            });

    }

    this.calculatePrice = function(order) {
        let price = 0;
        if (order.eventName === 'funeral-cars' || order.eventName === 'cars' || order.eventName === 'funeral-merchandise') {
            order.forEach((item) => {
                if (!isNaN(parseInt(item.description.Cost))) {
                    price += parseInt(item.description.Cost)
                }
            });
            console.log(price);
            this.order.totalPrice = price;
        }
    }
};