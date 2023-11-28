const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const timesSchema = new Schema({
    name:{
      type: String,
      required:true,
    },
    logo:{
      type: String,
      required: true,
    },league:{
      type: String,
      required:true,
    },id:{
      type: int,
      required:true,
    }, season:{
      type: String,
      required:true,
    },
})

timesSchema.plugin(normalize);
var times = mongoose.model('Jogadores', timesSchema);

module.exports = times;