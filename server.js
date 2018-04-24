const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(express.static('build'))
// configuration =================
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// application -------------------------------------------------------------
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });
app.use('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');  // load the single view file (angular will handle the page changes on the front-end)
});



// listen (start app with node server.js) ======================================
app.listen(3000);
console.log("App listening on port 3000");
