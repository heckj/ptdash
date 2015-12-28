var express = require('express');
var tracker = require('../lib/tracker');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', function(req, res, next) {
    tracker.getEpicsAsync(1492890).then(function(content) {
        res.json(content);
    }).catch(next);
});

module.exports = router;
