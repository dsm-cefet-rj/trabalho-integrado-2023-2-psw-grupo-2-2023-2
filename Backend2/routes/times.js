var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Times = require('../models/times');

router.use(bodyParser.json());


/* GET users listing. */
//pra terminar isso direito eu preciso do redux pronto
router.route('/')
.get(async(req, res, next) => {

  try{
    Times.create({id: '2',name:'trembolona fc',logo:'logo192.png',league:'Brasileirao',season:'2024'})
    const timesBanco = await Times.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(timesBanco);
}catch(err){
  err={};
  err.statusCode=404;
  res.json(err);
}
})
.post((req, res, next) => {
  
    Times.create(req.body)
     .then((times)=>{
      console.log('Time Criado', times);
      res.statusCode=200;
      res.setHeader('Content-Type', 'application/json');
      res.json(times);
     }, (err)=>next(err))
     .catch((err)=> next(err));
    })
//rota com id especifico(usar pra usar um .edit possivelmente mais tarde)
router.route('/:id')
.get(async (req, res, next) => {
  let err;
  res.setHeader('Content-Type', 'application/json')
  try{
  const resp= await Times.findById(req.params.id);
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
.delete((req, res, next) => {Times.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.json(resp.id);
  },(err) => next(err))
  .catch((err) => next(err));
  
})
  
.put((req, res, next) => {

  Times.findByIdAndUpdate(req.params.id,{
    $set: req.body
}, { new: true})
.then((time) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(time);
},(err) => next(err))
.catch((err) => next(err));
});



module.exports = router;
