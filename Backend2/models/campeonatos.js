const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

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


campeonatosSchema.plugin(normalize);
var campeonatos = mongoose.model('campeonatos', campeonatosSchema);

module.exports = campeonatos;

