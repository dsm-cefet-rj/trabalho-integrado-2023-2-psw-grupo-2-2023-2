var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogadoresRouter = require('./routes/jogadores');
var campeonatoRouter = require('./routes/campeonato');
var timeRouter = require('./routes/times');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jogadores', jogadoresRouter);
app.use('/campeonato', campeonatoRouter);
app.use('/time', timeRouter);

module.exports = app;
