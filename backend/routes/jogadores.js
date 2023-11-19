var express = require('express');
var router = express.Router();

let jogadores =  [
    {
        "nome" : "Drimit Payet",
        "sigla" : "DP",
        "id" : 1
    },
    {
        "nome" : "leo garden",
        "sigla" : "LG",
        "id" : 2
    }

]

router.route('/jogadores')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(jogadores);
})

.post((req, res, next) => {
    let proxId = 1 + jogadores.map(p=>p.id).reduce((x, y) => Math.max(x,y));
    let jogador = [{...req.body, id:proxId}];
    jogadores.push(jogador);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(jogador);
})


router.route('/jogadores/:id')
.delete((req, res, next) => {

    jogadores = jogadores.filter(function(value, index, arr){
        return value.id != req.params.id;
    });

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.params.id);

})

.put((req, res, next) => {

    let index = jogadores.map(p=> p.id).indexOf(req.params.id);
    jogadores.splice(index,1,req.body);

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.body);

})


module.exports = router;
