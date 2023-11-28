const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const usuariosSchema = new Schema({
    nome:{
      type: String,
      required:true,
    },
    sigla:{
      type: String,
      required: true,
    }
})

usuariosSchema.plugin(normalize);
var usuarios = mongoose.model('Usuarios', timesSchema);

module.exports = usuarios;