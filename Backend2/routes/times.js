var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const times = require('../models/times');
var authenticate = require('../authenticate');
const cors = require('./cors');
router.use(bodyParser.json());

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser,  async (req, res, next) => {
  console.log(req.user);
  try{
    const timesBanco = await times.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(timesBanco);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
    
})
.post(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  times.create(req.body)
  .then((time) => {
      console.log('time criado ', time);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(time);
  }, (err) => next(err))
  .catch((err) => next(err));

})

router.route('/:id')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  times.findById(req.params.id)
  .then((resp) => {
    if (resp) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    } else {
      res.status(404).json({ message: 'time não encontrado' });
    }
  })
  .catch((err) => next(err));


})
.delete(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  times.findByIdAndDelete(req.params.id)
  .then((resp) => {
    if (resp) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp.id);
    } else {
      res.status(404).json({ message: 'Time não encontrado' });
    }
  })
  .catch((err) => next(err));

})
.put(cors.corsWithOptions, authenticate.verifyUser,  (req, res, next) => {
  
  times.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true })
  .then((time) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(time);
  }, (err) => next(err))
  .catch((err) => next(err));

})


module.exports = router;