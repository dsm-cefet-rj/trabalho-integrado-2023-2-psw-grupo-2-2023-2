var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-fle-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogadoresRouter = require('./routes/jogadores');
var campeonatoRouter = require('./routes/campeonato');
var usersRouter = require('.routes/users');
var timeRouter = require('./routes/times');

var config = require('./config');

const mongoose = require('mongoose');
const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Conectado no servidor");
}, (err) => {console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-89765-75648'));

app.use(passport.initialize());

// app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/jogadores', jogadoresRouter);
app.use('/campeonato', campeonatoRouter);
app.use('/time', timeRouter);

module.exports = app;