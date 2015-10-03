var express = require('express');
var router = express.Router();
var _ = require('lodash');
var store = require('../store');

router.get('/', function(req, res, next) {
    res.render('log');
});

router.post('/newLogMessage', function(req, res){
  console.log('got message', req.body);
  var message = req.body.message || "";
  var name = req.body.name || "Unknown";

  res.cookie('lastSeenComment', store.db.logMessages.length);
  res.cookie('name', name);

  store.db.logMessages.push({"name": name, "message": message});
  res.redirect('back');

});

module.exports = router;
