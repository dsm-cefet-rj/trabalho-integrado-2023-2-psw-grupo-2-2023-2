const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose'); // Corrected typo
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

timesSchema.plugin(normalize);
var times = mongoose.model('Times', timesSchema); // Corrected from 'Jogadores' to 'Times'

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
