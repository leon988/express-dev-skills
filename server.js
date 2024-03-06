var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Log in the terminal the HTTP request info
app.use(logger('dev'));

// Processes data that is sent in th body of the request, as json
app.use(express.json());

// Processes data sent from a form in the 'body' of the request
// It will create a property in req.body, for each <input>, <select>, etc
app.use(express.urlencoded({ extended: false }));

// Adds cookies property for each cookie sent in the request
app.use(cookieParser());

// If the request is for the static asset, returns that file
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  console.log('Hello from custom middleware');
  res.locals.time = new Date().toLocaleTimeString();
  next();
});

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
