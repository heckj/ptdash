var express = require('express');
var tracker = require('./lib/tracker');
var app = express();

app.get('/', function(req, res, next) {
    tracker.getEpicsAsync().then(function(content) {
        res.json(content);
    }).catch(next);

});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Dummy app listening onnode port %s', port);
});
