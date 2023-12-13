const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jogadoresSchema = new Schema({
  player:{
  id: {
    type: Number,
    
  },
  age: {
    type: Number,
    
  },
  birth: {
    date: {
      type: String,
      
    },
    place: {
      type: String,
      
    },
    country: {
      type: String,
      
    },
  },
  name: {
    type: String,
    
  },
  firstname: {
    type: String,
    
  },
  lastname: {
    type: String,
    
  },
  name: {
    type: String,
    
  },
  height: {
    type: String,
  },
  injured: {
    type: Boolean,
  },
  nationality: {
    type: String,
    
  },
  photo: {
    type: String,
  },
  weight: {
    type: String,
  },
  statistics: [
    {
      team: {
        id: {
          type: Number,
        },
        name: {
          type: String,
          
        },
        logo: {
          type: String,
        },
      },
      league: {
        id: {
          type: Number,

        },
        name: {
          type: String,
        },
        country: {
          type: String,
        },
        logo: {
          type: String,
        },
        flag: {
          type: String,
        },
        season: {
          type: Number,
        },
      },
      games: {
        appearences: Number,
        lineups: Number,
        minutes: Number,
        number: Number,
        position: String,
        rating: Number,
        captain: Boolean,
      },
      substitutes: {
        in: Number,
        out: Number,
        bench: Number,
      },
      shots: {
        total: Number,
        on: Number,
      },
      goals: {
        total: Number,
        conceded: Number,
        assists: Number,
        saves: Number,
      },
      passes: {
        total: Number,
        key: Number,
        accuracy: Number,
      },
      tackles: {
        total: Number,
        blocks: Number,
        interceptions: Number,
      },
      duels: {
        total: Number,
        won: Number,
      },
      dribbles: {
        attempts: Number,
        success: Number,
        past: Number,
      },
      fouls: {
        drawn: Number,
        committed: Number,
      },
      cards: {
        yellow: Number,
        yellowred: Number,
        red: Number,
      },
      penalty: {
        won: Number,
        commited: Number,
        scored: Number,
        missed: Number,
        saved: Number,
      },
    },
  ],
}
});



var jogadores = mongoose.model('jogadores', jogadoresSchema);

module.exports = jogadores;

