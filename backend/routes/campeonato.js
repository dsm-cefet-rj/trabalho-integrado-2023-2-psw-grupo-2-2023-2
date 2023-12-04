var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const campeonatos = require('../models/campeonatos')
var authenticate = require('../authenticate');


router.use(bodyParser.json());


router.route('/campeonato')
.get(authenticate.verifyUser, async (req, res, next) => {
    try{
        const campeonatosBanco = await campeonatos.find({}).maxTime(1000);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campeonatosBanco);
    }catch(err){
        next(err);
    }

})

.post(authenticate.verifyUser, (req, res, next) => {
    
    campeonatos.create(req.body)
    .then((campeonato) =>{
        console.log('Campeonato criado' , campeonato);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campeonato);
    }, (err) => next(err))
    .catch((err) => next(err));

})

router.route('/campeonato/:id')
.get(authenticate.verifyUser, (req, res, next) => {
    campeonatos.findById(req.params.id)
        .then((resp) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp);
        
        },(err) => next(err))
        .catch((err) => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    campeonatos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(resp.id);
    
    },(err) => next(err))
    .catch((err) => next(err));
})

.put(authenticate.verifyUser, (req, res, next) => {
    campeonatos.findOneAndUpdate(req.params.id,{
        $set: req.body
    }, { new: true})
    .then((campeonato) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(campeonato);
    
    },(err) => next(err))
    .catch((err) => next(err));
})


module.exports = router;
