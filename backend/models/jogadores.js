const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = requise('normalize-mongoose');
const jogadoresSchema = new Schema({
    name:{
      type: String,
      required:true,
    },
    id:{
      type: int,
      required: true,
    },
    firstname:{
      type: int,
      required: true,
    }
    ,
    lastname:{
      type: String,
      required: true,
    }
    ,
    team_id:{
      type: int,
      required: true,
    }
    team_name:{
      type: String,
      required: true,
    },
    appearences:{
      type: int,
      required: true,
    },
    position:{
      type: String,
      required: true,
    },
    rating:{
      type: int,
      required: true,
    },
    photo:{
      type: String,
      required: true,
    },
    total:{
      type: int,
      required: true,
    },
    on:{
      type: String,
      required: true,
    }
})

jogadoresSchema.plugin(normalize);
var jogadores = mongoose.model('Jogadores', jogadoresSchema);

module.exports = jogadores;
{
  "shots": {
    "total": 0,
    "on": 0
  },
  "goals": {
    "total": 0,
    "assists": 0
  },
  "passes": {
    "total": 0,
    "accuracy": 0
  },
  "duels": {
    "total": 0,
    "won": 0
  },
  "dribbles": {
    "attempts": 0,
    "success": 0
  },
  "fouls": {
    "committed": 0
  },
  "cards": {
    "yellow": 0,
    "red": 0
  }