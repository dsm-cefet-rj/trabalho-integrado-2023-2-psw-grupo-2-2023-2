const User = require('./models/users');
const jwt = require('jsonwebtoken');
const config = require('./config');

// Função para gerar token JWT
exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

// Rota de login usando LocalStrategy
exports.login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ success: false, message: 'Autenticação falhou.' });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                return next(err);
            }

            const token = exports.getToken({ _id: user._id, username: user.username });
            return res.json({ success: true, token: token });
        });
    })(req, res, next);
};

// Exemplo de uma rota protegida
exports.protectedRoute = (req, res) => {
    res.json({ message: "Rota protegida acessada com sucesso!" });
};
