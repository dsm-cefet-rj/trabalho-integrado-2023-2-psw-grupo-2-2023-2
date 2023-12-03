const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const normalize = requise('normalize-mongoose');
var User = new Schema({
    Username:{
      type: String,
      required:true,
      unique: true
    },
    senha:{
      type: String,
      required: true,
    },
    id:{
      type: int,
      required: true,
    },
    idTeam:{
      type: int,
      required: true,
    },
    admin:{
      type: Boolean,
      default: false
    }
})

User.plugin(normalize);
module.exports = mongoose.model('User', User);

