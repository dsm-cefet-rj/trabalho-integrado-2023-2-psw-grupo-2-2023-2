const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const campeonatosSchema = new Schema({
    nome:{
      type: String,
      required:true,
    },
    id:{
      type: Number,
      required: true,
    },
    country:{
      type: String,
      required: true,
    },
    times:[{
      type: mongoose.Schema.Types.ObjectId ,
      ref:'times'
    }]
})

campeonatosSchema.plugin(normalize);
var campeonatos = mongoose.model('Campeonatos', campeonatosSchema);

module.exports = campeonatos;

