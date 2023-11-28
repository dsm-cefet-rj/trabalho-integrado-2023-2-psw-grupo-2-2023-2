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
    },
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
    shots_total:{
      type: int,
      required: true,
    },
    on:{
      type: int,
      required: true,
    },
    goals_total:{
      type: int,
      required: true,
    },
    assists:{
      type: int,
      required: true,
    },
    passes_total:{
      type: int,
      required: true,
    },
    accuracy:{
      type: int,
      required: true,
    },
    duels_total:{
      type: int,
      required: true,
    },
    won:{
      type: int,
      required: true,
    },
    attempts:{
      type: int,
      required: true,
    },
    succes:{
      type: int,
      required: true,
    },
    commited:{
      type: int,
      required: true,
    },
    yellow:{
      type: int,
      required: true,
    },
    red:{
      type: int,
      required: true,
    }
})

jogadoresSchema.plugin(normalize);
var jogadores = mongoose.model('Jogadores', jogadoresSchema);

module.exports = jogadores;