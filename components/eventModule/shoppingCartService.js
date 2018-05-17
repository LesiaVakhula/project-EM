module.exports = function($http, filterFactory, localStorageService) {
    'ngIngject';

    function makePostRequest(url, data) {
        $http.post(url, data)
            .then(function successCallback(response) {
                console.log('success');
            }, function errorCallback(response) {
                console.log('Error!!!');
            });
    }

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

    this.addToCart = function(item, serviceName, owner) {
        let order = {
            name: serviceName,
            service: item,
            owner: owner,
            userEmail: filterFactory.userEmail || localStorageService.get('email')
        };
        makePostRequest('/addItemToOrder', order);
    }

    this.removeFromCart = function(service, name, id) {
        let itemToDelete = {
            user: filterFactory.userEmail || localStorageService.get('email')
        };
        if(name && id) {
            itemToDelete.name = name;
            itemToDelete.id = id;
        } else {
            itemToDelete.service = service;
        }
        makePostRequest('/removeItemFromOrder', itemToDelete);
    }

    this.changeGuestsList = function(person, operation) {
        let url = '/addPersonToInvite';
        let personData = {
            user: filterFactory.userEmail || localStorageService.get('email'),
            eventName: filterFactory.selectedEvent || localStorageService.get('selectedEvent'),
            currentEvent: filterFactory.currentEvent || localStorageService.get('currentEvent'),
            person: person
        };
        if(operation === 'remove') {
           url = '/removePersonFromInvite';
        }

        makePostRequest(url, personData);

    }

     this.checkGuestsList = function(userName, eventName) {
        let data = { userName: userName || localStorageService.get('email'), eventName: eventName };
        makePostRequest('/removeGuests', data);
    }
    
};