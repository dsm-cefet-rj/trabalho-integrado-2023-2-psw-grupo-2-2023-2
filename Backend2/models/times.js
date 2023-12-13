const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  team:{
  id: {
    type: Number,
    
  },
  name: {
    type: String,
    
  },
  code: {
    type: String,
    
  },
  country: {
    type: String,
    
  },
  founded: {
    type: Number,
    
  },
  national: {
    type: Boolean,
    
  },
  logo: {
    type: String,
  },
  venue: {venueSchema},
}
});


var times = mongoose.model('times', timesSchema); 

module.exports = times;