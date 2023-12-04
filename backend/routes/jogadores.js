var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jogadores = require('../models/jogadores')
var authenticate = require('../authenticate');

router.use(bodyParser.json());


router.route('/jogadores')
.get(authenticate.verifyUser, async (req, res, next) => {

    try{
        const jogadoresBanco = await jogadores.find({}).maxTime(1000);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(jogadoresBanco);
    }catch(err){
        next(err);
    }

})

.post(authenticate.verifyUser, (req, res, next) => {
    
    jogadores.create(req.body)
    .then((jogador) =>{
        console.log('jogador criado' , jogador);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(jogador);
    }, (err) => next(err))
    .catch((err) => next(err));

})

router.route('/jogadores/:id')
.get(authenticate.verifyUser, (req, res, next) => {
    jogadores.findById(req.params.id)
        .then((resp) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp);
        
        },(err) => next(err))
        .catch((err) => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    jogadores.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(resp.id);
    
    },(err) => next(err))
    .catch((err) => next(err));
})

.put(authenticate.verifyUser, (req, res, next) => {
    jogadores.findOneAndUpdate(req.params.id,{
        $set: req.body
    }, { new: true})
    .then((jogador) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(jogador);
    
    },(err) => next(err))
    .catch((err) => next(err));
})


module.exports = router;
