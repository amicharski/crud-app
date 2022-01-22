var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

var indexRouter = require('./routes');
var userRouter = require('./routes/users.routes.js');
var sessionRouter = require('./routes/sessions.routes');

var app = express();

app.use(history());
app.use(serveStatic(__dirname + '/dist'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', userRouter);
app.use('/session/', sessionRouter);
app.use('/', indexRouter);

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
  res.send(res.locals.error);
});

module.exports = app;
