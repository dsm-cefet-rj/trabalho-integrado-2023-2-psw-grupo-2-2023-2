const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const campeonatosSchema = new Schema({
    nome:{
      type: String,
      required:true,
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



var campeonatos = mongoose.model('campeonatos', campeonatosSchema);

module.exports = campeonatos;

