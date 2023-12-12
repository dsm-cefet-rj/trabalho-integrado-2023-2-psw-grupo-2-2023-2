const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  idTeam: {
    type: Number,
    required: true,
  }

})
UserSchema.plugin(passportLocalMongoose)

var usuarios = mongoose.model('Usuarios', UserSchema); // Corrected from 'Jogadores' to 'Times'

module.exports = usuarios;