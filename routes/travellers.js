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
        res.render('travellers', { users: users });
    }

});

router.post('/', function(req, res){
  console.log('got user', req.body);
  users.push(req.body);
  //res.send('Added user: ' + JSON.stringify(req.body));
  res.redirect('/travellers');

});

router.put('/:id', function(req, res){
    console.log('got position update', req.body);
    _.assign(users[req.params.id], req.body);
    console.log('got position update', users);
    res.send(200);

});

router.get('/new', function(req, res) {
  res.render('add-new-traveller');
});



module.exports = router;

