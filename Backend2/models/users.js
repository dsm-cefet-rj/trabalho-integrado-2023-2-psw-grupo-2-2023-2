const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  idTeam: {
    type: Number,
    required: true,
  },
  admin: {
    type: Boolean,
    default: false
  }
})

var usuarios = mongoose.model('Usuarios', UserSchema); // Corrected from 'Jogadores' to 'Times'

module.exports = times;