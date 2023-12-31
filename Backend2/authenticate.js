var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/users');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); 

var config = require('./config.js');



passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
     return jwt.sign(user, '12345-67890-09876-76890', {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '12345-67890-09876-76890'; // Use a chave secreta real

exports.jwtPassport = passport.use(new JwtStrategy(opts,
     (jwt_payload, done) => {
          console.log("Jwt payload: ", jwt_payload);
          User.findOne({ _id: jwt_payload._id })
          .then(user => {
          if (user) {
               return done(null, user);
          } else {
               return done(null, false);
          }
          })
          .catch(err => {
          return done(err, false);
          });
     }));

exports.verifyUser = passport.authenticate('jwt', {session: false});
