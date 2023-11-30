var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-fle-store')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jogadoresRouter = require('./routes/jogadores');
var campeonatoRouter = require('./routes/campeonato');
var timeRouter = require('./routes/times');

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017//backend';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Conectado no servidor");
}, (err) => {console.log(err); });

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-89765-75648'));

app.use(session({
    name: 'session-id',
    secret: '12345-6789-09876-54321',
    saveUnitialized: false,
    resave: false,
    store: new FileStore()

}));




function auth (req, res, next){
    console.log(req.headers);
    if(!req.signedCookies.user){
        var authHeader = req.headers.authorization;
        if(!authHeader){
            var err = new Error('You are not authenticated');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
            return;
        }

        var auth = new Buffer.from(authheader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0];
        var pass = auth[1];
        if (user == 'admin' && pass == 'password'){
            res.cookie('user', 'admin', {signed:true});
            next();
        }else{
            var err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate','Basic');
            err.status = 401;
            next(err);
        }
    }else{
        if(req.signedCookies.user == 'admin'){
            next();
        }else{
            var err = new Error('You are not authenticated!');
            err.status = 401;
            next(err);
        }
    }
}

app.use(auth);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jogadores', jogadoresRouter);
app.use('/campeonato', campeonatoRouter);
app.use('/time', timeRouter);

module.exports = app;
