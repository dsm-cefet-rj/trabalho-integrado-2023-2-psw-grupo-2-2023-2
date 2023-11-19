var express = require('express');
var router = express.Router();

let campeonatos =  [
    {
        "nome" : "Brasileirão",
        "sigla" : "BRA",
        "id" : 1
    },
    {
        "nome" : "Premier League",
        "sigla" : "ING",
        "id" : 2
    }

]

router.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(campeonatos);
})

.post((req, res, next) => {
    let proxId = 1 + campeonatos.map(p=>p.id).reduce((x, y) => Math.max(x,y));
    let campeonato = [{...req.body, id:proxId}];
    campeonatos.push(campeonato);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(campeonato);
})


router.route('/:id')
.delete((req, res, next) => {

    campeonatos = campeonatos.filter(function(value, index, arr){
        return value.id != req.params.id;
    });

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.params.id);

})

.put((req, res, next) => {

    let index = campeonatos.map(p=> p.id).indexOf(req.params.id);
    campeonatos.splice(index,1,req.body);

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.body);

})


module.exports = router;
