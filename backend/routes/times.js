var express = require('express');
var router = express.Router();

let times =  [
    {
        "nome" : "Vasco",
        "sigla" : "CRVG",
        "id" : 1
    },
    {
        "nome" : "Barcelona",
        "sigla" : "BAR",
        "id" : 2
    }

]

router.route('/')
.get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(times);
})

.post((req, res, next) => {
    let proxId = 1 + times.map(p=>p.id).reduce((x, y) => Math.max(x,y));
    let time = [{...req.body, id:proxId}];
    times.push(time);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(time);
})


router.route('/:id')
.delete((req, res, next) => {

    times = times.filter(function(value, index, arr){
        return value.id != req.params.id;
    });

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.params.id);

})

.put((req, res, next) => {

    let index = times.map(p=> p.id).indexOf(req.params.id);
    times.splice(index,1,req.body);

    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(req.body);

})





module.exports = router;
