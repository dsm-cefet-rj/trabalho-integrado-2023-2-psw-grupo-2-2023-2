var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const campeonatos = require('../models/campeonatos');

router.use(bodyParser.json());

router.route('/')
.get(async(req, res, next) => {

  try{
    const campeonatosBanco = await campeonatos.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(campeonatosBanco);
}catch(err){
  err={};
  err.statusCode=404;
  res.json(err);
}
})
router.route('/:id')
.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json')
  try{
  const resp= await campeonatos.findById(req.params.id);
    if(resp != null){
      res.statusCode = 200;
      res.json(resp);
    }else{
      err={};
      err.statusCode=404;
      res.json(err);
      }
  
}catch(errParam){
crossOriginIsolated.log(errParam);
res.statusCode=404;
res.json({});
}


})
.delete((req, res, next) => {campeonatos.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.json(resp.id);
  },(err) => next(err))
  .catch((err) => next(err));
  
})
  
.put((req, res, next) => {

  campeonatos.findByIdAndUpdate(req.params.id,{
    $set: req.body
}, { new: true})
.then((campeonatos) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(campeonatos);
},(err) => next(err))
.catch((err) => next(err));
});



module.exports = router;
module.exports = router;