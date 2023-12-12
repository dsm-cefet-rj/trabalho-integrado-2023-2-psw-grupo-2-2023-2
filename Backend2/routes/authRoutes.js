// routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

// Rota de login usando LocalStrategy
router.post('/login', passport.authenticate('local', { session: false }), authController.login);

// Rota protegida usando JwtStrategy
router.get('/protected', passport.authenticate('jwt', { session: false }), authController.protectedRoute);

module.exports = router;
