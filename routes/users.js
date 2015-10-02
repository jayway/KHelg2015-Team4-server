var express = require('express');
var router = express.Router();

/* GET users listing. */
var users = [];

router.get('/', function(req, res, next) {
  //res.send('Has users ' + users.length);
  res.render('users', { users: users });
});

router.post('/', function(req, res){
  console.log('got user', req.body);
  users.push(req.body);
  //res.send('Added user: ' + JSON.stringify(req.body));
  res.redirect('/users');

});

module.exports = router;

