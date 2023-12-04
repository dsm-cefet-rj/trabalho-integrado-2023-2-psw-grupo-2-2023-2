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

// AINDA SENDO FEITO
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Times = require('../models/times');

router.post('/save-team', async (req, res) => {
  try {
    const { name, logo, league, id, season, jogadores } = req.body;

    const newTeam = new Times({
      name,
      logo,
      league,
      id,
      season,
      jogadores,
    });

    const savedTeam = await newTeam.save();

    res.status(201).json({ success: true, team: savedTeam });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = router;
