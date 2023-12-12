var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Campeonatos = require('../models/campeonatos');
var authenticate = require('../authenticate');
const cors = require('./cors');
router.use(bodyParser.json());

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser,  async (req, res, next) => {
  console.log(req.user);
  try{
    const campeonatosBanco = await Campeonatos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campeonatosBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  Campeonatos.create(req.body)
  .then((campeonato) => {
      console.log('Campeonato criado ', campeonato);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(campeonato);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const campeonatos = await Campeonatos.findById(req.params.id).populate('times');
    if(campeonatos != null){
      res.statusCode = 200;
      res.json(campeonatos);
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
  
  Campeonatos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
    .catch((err) => next(err));


})
.put(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  Campeonatos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((campeonato) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(campeonato);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;