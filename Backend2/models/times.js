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
      type: Number, // Corrected from 'int' to 'Number'
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    jogadores: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Jogadores', // Corrected from 'jogadores' to 'Jogadores'
    }],
});

var times = mongoose.model('Times', timesSchema); // Corrected from 'Jogadores' to 'Times'

module.exports = times;