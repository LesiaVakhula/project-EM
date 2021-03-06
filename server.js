const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs');
    cookie = require('cookie'),
    cookieParser = require('cookie-parser');

app.use(express.static('build'))
// configuration =================
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(cookieParser('secret'));

app.get('/checkingUser', function (req, res) {
    const cookies = cookie.parse(req.headers['cookie']),
        parsedCookies = cookieParser.signedCookies(cookies, 'secret');
    res.status(200).send(parsedCookies);
});

app.get('/getService', function(req, res) {
    fs.readFile('./storage/eventsItems.json', 'utf8', (err, response) => {
        if (err) throw err;
        const service = JSON.parse(response).find((item) => item.id === req.query.id);
        if (!service) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(service);
    });
});

app.get('/getEventServices', function(req, res) {
    fs.readFile('./storage/eventsServices.json', 'utf8', (err, response) => {
        if (err) throw err;
        const services = JSON.parse(response).find((item) => item.name === req.query.name);
        if (!services) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(services);
    });
});

app.get('/getClothesPartners', function(req, res) {
    fs.readFile('./storage/weddingClothes.json', 'utf8', (err, response) => {
        if (err) throw err;
        const clothesPartners = JSON.parse(response);
        if (!clothesPartners) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(clothesPartners);
    });
});

app.get('/getEventsData', function(req, res) {
    fs.readFile('./storage/events.json', 'utf8', (err, response) => {
        if (err) throw err;
        const eventsData = JSON.parse(response);
        if (!eventsData) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(eventsData);
    });
});

app.post('/setNewUser', function(req, res) {
    let newUserObj = req.body;
    fs.readFile('./storage/users.json', 'utf8', (err, response) => {
        if (err) throw err;
        let usersArray = response ? JSON.parse(response) : [],
            isUser = usersArray.find((user) => user.email === req.body.email);
        if (isUser) {
            res.status(200).send(isUser);
            return;
        };
        usersArray.push(newUserObj);
        fs.writeFile('./storage/users.json', JSON.stringify(usersArray), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(201);
            };
        });
    });
});


app.get('/getUsersOrder', function(req, res) {
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        let orders = response ? JSON.parse(response) : [];
        
        let orderExists = orders.some(item => item.user === req.query.userName &&
            item.eventName === req.query.eventName);
        res.status(200).send(orderExists);
    });
});

app.post('/addOrderPattern', function(req, res) {
    let newOrder = req.body;
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        let orderStorage = response ? JSON.parse(response) : [];
        let currentOrderIndex = orderStorage.findIndex(item => item.user = newOrder.user);

        if (currentOrderIndex !== -1) {
            orderStorage[currentOrderIndex] = newOrder;
        } else {
            orderStorage.push(newOrder);
        }


        fs.writeFile('./storage/orders.json', JSON.stringify(orderStorage), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(201);
            };
        });
    });
});

app.post('/addItemToOrder', function (req, res) {
    let newOrder = req.body,
        user = req.body.userEmail,
        owner = req.body.owner;
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        let orderStorage = response ? JSON.parse(response) : [],
            userOrders = orderStorage.find((item) => item.user === user),
            order = Object.assign({
                imgUrl: newOrder.service.image,
                id: newOrder.service.itemId
            }, newOrder.service.description);
        if (owner === 'other') {
            userOrders[newOrder.name] = order;
        } else {
            let service = userOrders.services.find((item) => item.name === newOrder.name);
            if (service) {
                service.items.push(order);
            }
        }

        let index = orderStorage.findIndex((item) => item.user === userOrders.user);
        orderStorage[index] = userOrders;

        fs.writeFile('./storage/orders.json', JSON.stringify(orderStorage), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(201);
            };
        });
    })
});

app.post('/removeItemFromOrder', function(req, res) {
    let itemToRemove = req.body,
        user = req.body.user; 
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        let orderStorage = response ? JSON.parse(response) : [],
            userOrders = orderStorage.find((item) => item.user === user),
            itemIndex = null;
            if(itemToRemove.service) {
                let service = Object.keys(userOrders).find(key => {
                    return userOrders[key]['name'] === itemToRemove.service.name
                });
                delete userOrders[service];
            } else {
                let service = userOrders.services.find( elem => elem.name === itemToRemove.name);
                serviceIndex = service.items.findIndex( elem => elem.id === itemToRemove.id );
                service.items.splice(itemIndex, 1);
            }

        let index = orderStorage.findIndex((item) => item.user === userOrders.user);
        orderStorage[index] = userOrders;

        fs.writeFile('./storage/orders.json', JSON.stringify(orderStorage), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(201);
            };
        });
    })
})

app.get('/getUserGuestsList', function(req, res) {
    let user = req.query.userName,
        event = req.query.eventName,
        currentEvent = req.query.currentEvent;
    fs.readFile('./storage/guestsList.json', 'utf8', (err, response) => {
        if (err) throw err;
        if (response) {
            let guestsListStorage = JSON.parse(response),
                usersGuestsList = guestsListStorage.filter(elem => elem.user === user &&
                    elem.eventName === event &&
                    elem.currentEvent === currentEvent),
                personsList = usersGuestsList.map(elem => elem = elem.person);
            res.status(200).send(personsList);
        };

    });
});

app.post('/addPersonToInvite', function(req, res) {
    let userList = req.body,
        user = req.body.user;
    fs.readFile('./storage/guestsList.json', 'utf8', (err, response) => {
        if (err) throw err;
        let guestsListStorage = response ? JSON.parse(response) : [];
        guestsListStorage.push(userList);

        fs.writeFile('./storage/guestsList.json', JSON.stringify(guestsListStorage), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(201);
            };
        });
    });
});

app.post('/removePersonFromInvite', function(req, res) {
    let guest = req.body;

    fs.readFile('./storage/guestsList.json', 'utf8', (err, response) => {
        if (err) throw err;
        let guestsListStorage = JSON.parse(response),
            currentGuestIndex = guestsListStorage.findIndex(elem => elem.user === guest.user &&
                elem.eventName === guest.eventName &&
                elem.currentEvent === guest.currentEvent &&
                elem.person.count === guest.person.count);
        guestsListStorage.splice(currentGuestIndex, 1);

        fs.writeFile('./storage/guestsList.json', JSON.stringify(guestsListStorage), (err) => {
            if (err) {
                throw err;
            } else {
                res.sendStatus(200);
            };
        });
    });
});

app.post('/removeGuests', function(req, res) {
    let data = req.body;

    fs.readFile('./storage/guestsList.json', 'utf8', (err, response) => {
        if (err) throw err;
        let guestsListStorage = response ? JSON.parse(response) : [];
        guestsListStorage = guestsListStorage.filter(elem => elem.user === data.user &&
                elem.eventName === data.eventName),
            fs.writeFile('./storage/guestsList.json', JSON.stringify(guestsListStorage), (err) => {
                if (err) {
                    throw err;
                } else {
                    res.sendStatus(200);
                };
            });
    });
})

app.get('/getShoppingCartContent', function(req, res) {
    let user = req.query.user;
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        if (response) {          
            let ordersStorage = JSON.parse(response),
                userOrder = ordersStorage.find(item => item.user === user);
            res.status(200).send(userOrder);
        };

    });
});

app.post('/clearOrder', function (req, res) {
    let user = req.body.user;
    fs.readFile('./storage/orders.json', 'utf8', (err, response) => {
        if (err) throw err;
        if (response) {
            let orders = JSON.parse(response),
                orderIndex = orders.findIndex(order => order.user === user);
            if (orderIndex !== -1) {
                orders.splice(orderIndex, 1);
                fs.writeFile('./storage/orders.json', JSON.stringify(orders), (err) => {
                    if (err) {
                        throw err;
                    } else {
                        res.sendStatus(201);
                    };
                });
            };
        };
    });
});

app.get('/getUser', function (req, res) {
    fs.readFile('./storage/users.json', 'utf8', (err, response) => {
        if (err) throw err;
        let registeredUser = '';
        if (response) {
            let users = JSON.parse(response),
                userEmail = req.query.email,
                userPass = req.query.pass;

            registeredUser = users.find((user) => {
                return user.email === userEmail && user.password === userPass;
            });
            if (registeredUser) {
                res.cookie('user', registeredUser.email, {
                    maxAge: 100000000,
                    signed: true
                });
            };
        };
        res.status(200).send(registeredUser);
    });
});

app.use('*', function(req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");