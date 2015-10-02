var express = require('express');
var router = express.Router();
var _ = require('lodash');
var store = require('../store');
var update = store.update;
var db = store.db;


router.get('/', function(req, res, next) {
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(db.infos);
    } else {
        res.render('infos', { infos: db.infos });
    }

});

router.post('/', function(req, res){
    console.log('create info', req.body);
    update(function(db) {
        db.infos.push(req.body);
        return 'Uppdaterat information ' + req.body.title;
    });

    res.redirect('/infos');
});

router.put('/:id', function(req, res){
    console.log('user updated info', req.body);
    _.assign(db.infos[req.params.id], req.body);
    console.log('info', db.infos[req.params.id]);
    res.send(200);

});

router.get('/new', function(req, res) {
    res.render('add-new-info');
});


module.exports = router;

