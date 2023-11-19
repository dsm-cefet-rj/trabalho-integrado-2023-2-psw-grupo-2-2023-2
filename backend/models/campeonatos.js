const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const campeonatosSchema = new Schema({
    nome:{
      type: String,
      required:true,
    },
    sigla:{
      type: String,
      required: true,
    }
})

campeonatosSchema.plugin(normalize);
var campeonatos = mongoose.model('Campeonatos', campeonatosSchema);

module.exports = campeonatos;