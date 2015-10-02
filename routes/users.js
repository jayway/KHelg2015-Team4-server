var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.post('/', function(req, res){
  console.log('got user', req);
  res.send('Added user');
});

