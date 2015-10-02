var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var travellers = require('./routes/travellers');
var events = require('./routes/events');
var infos = require('./routes/infos');
var log = require("./routes/log")
var store = require('./store');

var bodyParser = require('body-parser');
var app = express();

//app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//  extended: true
//}));
app.use(bodyParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add log message to data on every page!
app.use(function(req, res, next) {
    res.locals.logMessages = store.db.logMessages;
    res.locals.currentName = req.cookies.name;
    res.locals.title = "TravelWay"
    next();
});

app.get('/', function (req, res) {
  res.redirect('/travellers');
});
app.use('/events', events);
app.use('/travellers', travellers);
app.use('/infos', infos);
app.use('/log', log);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
