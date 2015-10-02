var express = require('express');
var router = express.Router();
var _ = require('lodash');
var db = require('../store');


router.get('/', function(req, res, next) {
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(db.events);
    } else {
        res.render('events', { events: db.events });
    }

});

router.post('/', function(req, res){
    console.log('create event', req.body);
    db.events.push(req.body);
    res.redirect('/events');
});

router.put('/:id', function(req, res){
    console.log('user joined event', req.body);
    var currentEvent = db.events[req.params.id];
    if (!currentEvent.participants) {
        currentEvent.participants = [];
    }
    currentEvent.participants.push(req.body);
    console.log('event', db.events[req.params.id]);
    res.send(200);

});

router.get('/new', function(req, res) {
    res.render('add-new-event');
});


module.exports = router;

