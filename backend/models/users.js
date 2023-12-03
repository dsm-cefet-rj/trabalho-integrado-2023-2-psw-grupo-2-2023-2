const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local0')
 
var User = new Schema({
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

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

