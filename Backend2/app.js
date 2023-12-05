var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var timesRouter = require('./routes/times');

const mongoose = require('mongoose');

const Times= require('./models/times');

const url='mongodb+srv://admin:1234@scoutball.mgalr3w.mongodb.net/?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("Conectado ao servidor");
},(err) => {console.log(err);})
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/times', timesRouter);

module.exports = app;
