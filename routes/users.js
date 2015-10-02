var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET users listing. */
var users = [];

router.get('/', function(req, res, next) {
  //res.send('Has users ' + users.length);
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(users);
    } else {
        res.render('users', { users: users });
    }

});

router.post('/', function(req, res){
  console.log('got user', req.body);
  users.push(req.body);
  //res.send('Added user: ' + JSON.stringify(req.body));
  res.redirect('/users');

});

router.put('/:id', function(req, res){
    console.log('got position update', req.body);
    _.assign(users[req.params.id], req.body);
    console.log('got position update', users);
    res.send(200);

});


module.exports = router;

