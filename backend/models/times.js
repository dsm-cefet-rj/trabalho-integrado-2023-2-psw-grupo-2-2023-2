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
    jogadres:[{
      type: mongoose.Schema.Types.ObjectId ,
      ref:'jogadores'
    }]
})

timesSchema.plugin(normalize);
var times = mongoose.model('Jogadores', timesSchema);

module.exports = times;

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
