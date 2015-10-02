var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* GET users listing. */
var users = [{"name":"Mike","email":"michael.kober@jayway.com","longitude": "12.784406","latitude": "55.941582"}, {"name":"Erik","email":"erik@jayway.com","longitude": "12.804137","latitude": "55.945024"}, {"name":"Andreas","email":"andreas@jayway.com","longitude": "12.770166","latitude": "55.960413"}];


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

router.get('/edit/:id', function(req, res){
  console.log('edit', req.params.id);
  res.render('users-edit', { user: _.assign({}, users[req.params.id], {id: req.params.id}) });
});

router.post('/edit/:id', function(req, res){
  var id = req.params.id;
  console.log('edit', id);
  console.log('body', req.body);
  _.assign(users[req.params.id], req.body);
  res.redirect('/users');
});

router.put('/:id', function(req, res){
    console.log('got position update', req.body);
    _.assign(users[req.params.id], req.body);
    console.log('got position update', users);
    res.send(200);

});


module.exports = router;

