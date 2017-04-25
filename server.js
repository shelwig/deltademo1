var appInsights = require("applicationinsights");
appInsights.setup("70abe90f-ca35-427c-a012-58edc42342a1").start();

var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});