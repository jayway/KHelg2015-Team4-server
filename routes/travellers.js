var express = require('express');
var router = express.Router();
var _ = require('lodash');
var db = require('../store');



router.get('/', function(req, res, next) {
  //res.send('Has users ' + users.length);
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(db.users);
    } else {
        res.render('travellers', { users: db.users });
    }

});

router.post('/', function(req, res){
  console.log('got user', req.body);
  db.users.push(req.body);
  //res.send('Added user: ' + JSON.stringify(req.body));
  res.redirect('/travellers');

});

router.put('/:id', function(req, res){
    console.log('got position update', req.body);
    _.assign(db.users[req.params.id], req.body);
    console.log('got position update', db.users);
    res.send(200);

});

router.get('/new', function(req, res) {
  res.render('add-new-traveller');
});



module.exports = router;

