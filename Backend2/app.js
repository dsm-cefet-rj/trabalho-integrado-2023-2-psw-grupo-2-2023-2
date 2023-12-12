var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogadoresRouter = require('./routes/jogadores');
var timesRouter = require('./routes/times');
var campeonatoRouter = require('./routes/campeonatos');

const mongoose = require('mongoose');
const { stringify } = require('querystring');

const url = 'mongodb+srv://admin:1234@scoutball.mgalr3w.mongodb.net/?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db) => {
    app.listen(5000, () => {
        console.log("servidor rodando em http://localhost:5000")
    })
}, (err) => { console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/user', usersRouter)
app.use('/jogadores', jogadoresRouter);
app.use('/times', timesRouter);
app.use('/campeonato', campeonatoRouter);

module.exports = app;
