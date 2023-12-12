const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jogadoresSchema = new Schema({
    name:{
      type: String,
      required:true,
    },
    id:{
      type: Number,
      required: true,
    },
    firstname:{
      type: String,
      required: true,
    }
    ,
    lastname:{
      type: String,
      required: true,
    }
    ,
    team_id:{
      type: Number,
      required: true,
    },
    team_name:{
      type: String,
      required: true,
    },
    appearences:{
      type: Number,
      required: true,
    },
    position:{
      type: String,
      required: true,
    },
    rating:{
      type: Number,
      required: true,
    },
    photo:{
      type: String,
      required: true,
    },
    shots_total:{
      type: Number,
      required: true,
    },
    on:{
      type: Number,
      required: true,
    },
    goals_total:{
      type: Number,
      required: true,
    },
    assists:{
      type: Number,
      required: true,
    },
    passes_total:{
      type: Number,
      required: true,
    },
    accuracy:{
      type: Number,
      required: true,
    },
    duels_total:{
      type: Number,
      required: true,
    },
    won:{
      type: Number,
      required: true,
    },
    attempts:{
      type: Number,
      required: true,
    },
    succes:{
      type: Number,
      required: true,
    },
    commited:{
      type: Number,
      required: true,
    },
    yellow:{
      type: Number,
      required: true,
    },
    red:{
      type: Number,
      required: true,
    }
})

var jogadores = mongoose.model('jogadores', jogadoresSchema);

module.exports = jogadores;

