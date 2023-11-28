const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const timesSchema = new Schema({
    nome:{
      type: String,
      required:true,
    },
    sigla:{
      type: String,
      required: true,
    }
})

timesSchema.plugin(normalize);
var times = mongoose.model('Jogadores', timesSchema);

module.exports = times;