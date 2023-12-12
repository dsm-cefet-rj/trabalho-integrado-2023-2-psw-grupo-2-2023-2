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

// app.js (ou index.js)
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('./models/users'); // Importe seu modelo de usuário aqui
const config = require('./config'); // Importe sua configuração aqui
const authRoutes = require('./routes/authRoutes');
const otherRoutes = require('./routes/otherRoutes');

// Configuração do Passport
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Configuração da estratégia JWT
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
        if (err) {
            return done(err, false);
        } else if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

// Middleware para converter o corpo da solicitação em JSON
app.use(bodyParser.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/other', otherRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
