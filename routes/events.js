var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET events listing. */
var events = [{"title":"Going out for a beer","description":"Örenäs is know for it's famous pubs and local breweries. Let's go out and drink some beers.", participants:[{"name": "Mike", "id":"0"}]}];


router.get('/', function(req, res, next) {
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(events);
    } else {
        res.render('events', { events: events });
    }

});

router.post('/', function(req, res){
    console.log('create event', req.body);
    events.push(req.body);
    res.redirect('/events');
});

router.put('/:id', function(req, res){
    console.log('user joined event', req.body);
    var currentEvent = events[req.params.id];
    if (!currentEvent.participants) {
        currentEvent.participants = [];
    }
    currentEvent.participants.push(req.body);
    console.log('event', events[req.params.id]);
    res.send(200);

});


module.exports = router;

