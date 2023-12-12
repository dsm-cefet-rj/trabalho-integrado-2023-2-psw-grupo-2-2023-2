const express = require('express');
const session = require('express-session');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var authenticate = require('./authenticate');
const FileStore = require('session-file-store')(session);
var passport = require('passport');
var config = require('./config.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogadoresRouter = require('./routes/jogadores');
var timesRouter = require('./routes/times');
var campeonatoRouter = require('./routes/campeonatos');

const mongoose = require('mongoose');
const { stringify } = require('querystring');

const url = config.mongoUrl;
const connect = mongoose.connect(url);

connect.then((db) => {
    app.listen(5000, () => {
        console.log("servidor rodando em http://localhost:5000")
    })
}, (err) => { console.log(err); });

var app = express();


app.use(session({
    store: new FileStore(), // Configura o armazenamento em arquivo para as sessões
    secret: '12345-67890-09876-76890',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Configure conforme necessário
}));


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(passport.initialize());


//app.use('/', indexRouter);
app.use('/user', usersRouter)

app.use(express.static(path.join(__dirname, 'public')));

app.use('/jogadores', jogadoresRouter);
app.use('/times', timesRouter);
app.use('/campeonato', campeonatoRouter);

module.exports = app;
