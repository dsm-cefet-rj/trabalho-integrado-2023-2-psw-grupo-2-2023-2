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
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Campeonatos.create(req.body)
      .then((campeonato) => {
          console.log('Campeonato criado', campeonato);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(campeonato);
      })
      .catch((err) => {
          console.error('Erro ao criar o campeonato', err);
          res.status(500).json({ error: 'Erro interno do servidor' });
      });
});

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  Campeonatos.findById(req.params.id)
  .then((resp) => {
    if (resp) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } else {
      res.status(404).json({ message: 'Campeonato não encontrado' });
    }
  })
  .catch((err) => next(err));


})
.delete(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  Campeonatos.findByIdAndDelete(req.params.id)
  .then((resp) => {
    if (resp) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
    } else {
      res.status(404).json({ message: 'Campeonato não encontrado' });
    }
  })
  .catch((err) => next(err));;


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