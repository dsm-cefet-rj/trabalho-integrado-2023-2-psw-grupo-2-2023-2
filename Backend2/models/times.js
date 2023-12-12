const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
const venueSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  address: {
    type: String,

  },
  city: {
    type: String,

  },
  capacity: {
    type: Number,

  },
  surface: {
    type: String,

  },
  image: {
    type: String,

  },
});

const timesSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  founded: {
    type: Number,
    required: true,
  },
  national: {
    type: Boolean,
    required: true,
  },
  logo: {
    type: String,
  },
  venue: venueSchema,
});

timesSchema.plugin(normalize);

var times = mongoose.model('times', timesSchema); // Corrected from 'Jogadores' to 'Times'

module.exports = times;