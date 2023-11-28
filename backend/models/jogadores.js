const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const jogadoresSchema = new Schema({
    nome:{
      type: String,
      required:true,
    },
    sigla:{
      type: String,
      required: true,
    }
})

jogadoresSchema.plugin(normalize);
var jogadores = mongoose.model('Jogadores', jogadoresSchema);

module.exports = jogadores;