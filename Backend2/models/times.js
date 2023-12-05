const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const timesSchema = new Schema({
    id: {
    type: Number,//ele poe o ID no schema do front como se fosse uma string n sei se tem q mudar
    required: true,
  },
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    league: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    }
})


var times = mongoose.model('times', timesSchema);

module.exports = times;