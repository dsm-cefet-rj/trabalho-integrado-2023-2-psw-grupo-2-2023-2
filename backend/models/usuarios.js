const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const usuariosSchema = new Schema({
    Username:{
      type: String,
      required:true,
    },
    senha:{
      type: String,
      required: true,
    },
    id:{
      type: int,
      required: true,
    },
    idTeam:{
      type: int,
      required: true,
    }
})

usuariosSchema.plugin(normalize);
var usuarios = mongoose.model('Usuarios', timesSchema);

module.exports = usuarios;