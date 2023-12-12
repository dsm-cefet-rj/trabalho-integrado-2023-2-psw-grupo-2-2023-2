const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');
const jogadoresSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  birth: {
    date: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
  },
  injured: {
    type: Boolean,
  },
  nationality: {
    type: String,
    required: true,
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
          required: true,
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
});


jogadoresSchema.plugin(normalize);

var jogadores = mongoose.model('jogadores', jogadoresSchema);

module.exports = jogadores;

