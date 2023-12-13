const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campeonatosSchema = new Schema({
    campeonato: {
        id: {
            type: Number,
        },
        name: {
            type: String,
        },
        country: {
            type: String,
        }
    }
});

const Campeonatos = mongoose.model('Campeonatos', campeonatosSchema);

module.exports = Campeonatos;