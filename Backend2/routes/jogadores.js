var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jogador = require('../models/jogadores');
var authenticate = require('../authenticate');
const cors = require('./cors');
router.use(bodyParser.json());

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser,  async (req, res, next) => {
  console.log(req.user);
  try{
    const jogadorBanco = await jogador.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(jogadorBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  jogador.create(req.body)
  .then((jogador) => {
      console.log('jogador criado ', jogador);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(jogador);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const jogador = await jogador.findById(req.params.id).populate('times');
    if(jogador != null){
      res.statusCode = 200;
      res.json(jogador);
    }else{
      err = {};
      res.statusCode = 404;
      res.json(err);
    }
  
  }catch(errParam){
    console.log(errParam);
    res.statusCode = 404;
    res.json({});
  }  

})
.delete(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  jogador.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  jogador.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((jogador) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(jogador);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;
