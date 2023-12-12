const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timesSchema = new Schema({
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
    id: {
      type: Number, 
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    jogadores: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jogadores', 
    }],
});

var times = mongoose.model('times', timesSchema); // Corrected from 'Jogadores' to 'Times'

module.exports = times;