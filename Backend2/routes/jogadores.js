var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jogadores = require('../models/jogadores');

router.use(bodyParser.json());

router.route('/')
.get(async(req, res, next) => {

  try{
    const jogadoresBanco = await jogadores.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(jogadoresBanco);
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
  const resp= await jogadores.findById(req.params.id);
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
.delete((req, res, next) => {jogadores.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.json(resp.id);
  },(err) => next(err))
  .catch((err) => next(err));
  
})
  
.put((req, res, next) => {

  jogadores.findByIdAndUpdate(req.params.id,{
    $set: req.body
}, { new: true})
.then((jogadores) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(jogadores);
},(err) => next(err))
.catch((err) => next(err));
});



module.exports = router;
