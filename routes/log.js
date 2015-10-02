var express = require('express');
var router = express.Router();
var _ = require('lodash');
var db = require('../store');

router.get('/', function(req, res, next) {
    res.render('log', { });
});

router.post('/newLogMessage', function(req, res){
  console.log('got message', req.body);
  var message = req.body.message || "";
  var name = req.body.name || "okänd"

  currentUser = name;

  db.logMessages.push({"name": name, "message": message});
  res.redirect('back');

});

module.exports = router;
