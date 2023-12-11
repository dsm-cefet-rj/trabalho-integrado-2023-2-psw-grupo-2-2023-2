var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var timesRouter = require('./routes/times');
var jogadoresRouter = require('./routes/jogadores');
var campeonatosRouter = require('./routes/campeonatos');

const mongoose = require('mongoose');
const url='mongodb+srv://admin:1234@scoutball.mgalr3w.mongodb.net/?retryWrites=true&w=majority';
const connect = mongoose.connect(url);
const connecToDataBase = require('./connect');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/times', timesRouter);
app.use('/campeonatos', campeonatosRouter);
app.use('/jogadores', jogadoresRouter);

connecToDataBase();

module.exports = app;
