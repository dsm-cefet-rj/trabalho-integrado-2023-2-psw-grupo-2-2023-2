const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campeonatosSchema = new Schema({
    id:{
      type: Number,
      required:true,
    },
    name:{
      type: String,
      required: true,
    },
    country:{
      type: String,
      required: true,
    }
})


var campeonatos = mongoose.model('campeonatos', campeonatosSchema);

module.exports = campeonatos;

