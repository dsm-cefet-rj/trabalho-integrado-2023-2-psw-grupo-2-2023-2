var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/users');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');
var config = require('./config.js');

// Configuração da estratégia de autenticação local
passport.use(new LocalStrategy(User.authenticate()));

// Serialização e desserialização do usuário
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Função para gerar token JWT
exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

// Configuração das opções para autenticação JWT
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

// Estratégia JWT para autenticação
exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("Jwt payload: ", jwt_payload);

        // Busca no banco de dados pelo ID do usuário presente no payload do JWT
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

// Middleware para verificar autenticação via JWT nas rotas protegidas
exports.verifyUser = passport.authenticate('jwt', { session: false });
