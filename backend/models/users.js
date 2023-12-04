const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local0')
 
var User = new Schema({
    id:{
      type: int,
      required: true,
    },
    idTeam:{
      type: int,
      required: true,
    },
    admin:{
      type: Boolean,
      default: false
    }
})

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

// AINDA SENDO FEITO
const mongoose = require('mongoose');

const usuariosSchema = new mongoose.Schema({
  Usuários: {
    Username: { type: String, required: true },
    Senha: { type: String, required: true },
    idTeam: { type: Number, required: true },
    TeamsSeguidos: { type: Array, default: [] },
    CampeonatosSeguidos: { type: Array, default: [] },
  },
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

module.exports = Usuarios;
