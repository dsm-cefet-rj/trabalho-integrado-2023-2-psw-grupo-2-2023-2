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
  let err;
  res.setHeader('Content-Type', 'application/json');
  try{
    const times = await times.findById(req.params.id).populate('times');
    if(times != null){
      res.statusCode = 200;
      res.json(times);
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
  
  times.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp.id);
    }, (err) => next(err))
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