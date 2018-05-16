module.exports = function ($http, filterFactory, localStorageService) {
    'ngIngject';

    function makePostRequest(url, data) {
        $http.post(url, data)
            .then(function successCallback(response) {
                console.log('success');
            }, function errorCallback(response) {
                console.log('Error!!!');
            });
    }

    this.getUsersOrder = function (userName, eventName) {
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
    };


    function createOrderPattern(user, eventName) {
        let orderPattern = {
            user: user,
            eventName: eventName,
            invitationGuest: {
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
        makePostRequest('/addOrderPattern', orderPattern);
    }

    this.addToCart = function (item, serviceName, owner) {
        let order = {
            name: serviceName,
            service: item,
            owner: owner,
            userEmail: filterFactory.userEmail || localStorageService.get('email')
        };

        makePostRequest('/addItemToOrder', order);
    };

    this.removeFromCart = function (item, eventName) {
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
    };


    this.changeGuestsList = function (person, operation) {
        let url = '/addPersonToInvite';
        let personData = {
            user: filterFactory.userEmail,
            eventName: filterFactory.selectedEvent,
            currentEvent: filterFactory.currentEvent,
            person: person
        };
        if (operation === 'remove') {
            url = '/removePersonFromInvite';
        }

        makePostRequest(url, personData);

    }

    this.checkGuestsList = function (userName, eventName) {
        let data = {
            userName: userName,
            eventName: eventName
        };
        makePostRequest('/removeGuests', data);
    }
};