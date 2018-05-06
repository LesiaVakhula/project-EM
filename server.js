const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs');

app.use(express.static('build'))
// configuration =================
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

// application -------------------------------------------------------------
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });

app.get('/getService', function (req, res) {
    fs.readFile('./storage/eventsItems.json', 'utf8', (err, responce) => {
        if (err) throw err;
        const service = JSON.parse(responce).find((item) => item.id === req.query.id);
        if (!service) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(service);
    });
});

app.get('/getEventServices', function (req, res) {
    fs.readFile('./storage/eventsServices.json', 'utf8', (err, responce) => {
        if (err) throw err;
        const services = JSON.parse(responce).find((item) => item.name === req.query.name);
        if (!services) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(services);
    });
});

app.get('/getClothesPartners', function (req, res) {
    fs.readFile('./storage/weddingClothes.json', 'utf8', (err, responce) => {
        if (err) throw err;
        const clothesPartners = JSON.parse(responce);
        if (!clothesPartners) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(clothesPartners);
    });
});

app.get('/getEventsData', function (req, res) {
    fs.readFile('./storage/events.json', 'utf8', (err, responce) => {
        if (err) throw err;
        const eventsData = JSON.parse(responce);
        if (!eventsData) {
            res.sendStatus(404);
            return;
        };
        res.status(200).send(eventsData);
    });
});

app.post('/setNewUser', function (req, res) {
    let newUserObj = req.body;
    fs.readFile('./storage/users.json', 'utf8', (err, responce) => {
        if (err) throw err;
        let usersArray = responce ? JSON.parse(responce) : [],
            isUser = usersArray.find((user) => user.email === req.body.email);
        if (isUser) {
            res.sendStatus(409);
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

app.get('/getUser', function (req, res) {
    fs.readFile('./storage/users.json', 'utf8', (err, responce) => {
        if (err) throw err;
        let registeredUser;
        if (responce) {
            let users = JSON.parse(responce),
                userEmail = req.query.email,
                userPass = req.query.pass,
                registeredUser = users.find((user) => {
                    return user.email === userEmail && user.password === userPass;
                });
        };
        res.status(200).send(registeredUser);
    });
});

app.use('*', function (req, res) {
    res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");