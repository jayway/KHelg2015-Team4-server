var express = require('express');
var router = express.Router();
var _ = require('lodash');
var store = require('../store');
var db = store.db;
var update = store.update;



router.get('/', function(req, res, next) {
  //res.send('Has users ' + users.length);
    var ct = req.get('Accept');
    if (ct && ct == 'application/json') {
        res.send(db.users);
    } else {
        res.render('travellers', { users: db.users});
    }

});

router.post('/', function(req, res){
  console.log('got user', req.body);
  update(function(db) {
    db.users.push(req.body);
    return 'Ny resenär ' + req.body.name;
  });

  //res.send('Added user: ' + JSON.stringify(req.body));
  res.redirect('/travellers');

});

router.put('/:id', function(req, res){
    console.log('got position update', req.body);
    update(function(db) {
      var user = db.users[req.params.id];

      _.assign(user, req.body);
      db.users.push(req.body);
      return 'Uppdaterat position för resenär ' + user.name;
    });

    res.send(200);

});

router.get('/new', function(req, res) {
  res.render('add-new-traveller');
});

module.exports = router;

