var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Times = require('../models/times');

router.use(bodyParser.json());




let times= [
  {
     "id": 96,
     "name": "Toulouse",
     "code": "TOU",
     "country": "France",
     "founded": 1937,
     "national": false,
     "logo": "https://media-4.api-sports.io/football/teams/96.png"
   }
 ]

/* GET users listing. */
//pra terminar isso direito eu preciso do redux pronto
router.route('/')
.get(async(req, res, next) => {

  try{
    const timesBanco = await Times.find({}).maxTime(1000);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(timesBanco);
}catch(err){
    next(err);
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
.get((req, res, next) => {Times.findById(req.params.id)
  .then((resp) => {
      res.statuscode = 200;
      res.setHeader('Content-Type', 'application/json')
      res.json(resp);
  },(err) => next(err))
  .catch((err) => next(err));
  
})
.delete((req, res, next) => {Times.findByIdAndRemove(req.params.id)
  .then((resp) => {
      res.statuscode = 200;
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
    res.statuscode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json(time);
},(err) => next(err))
.catch((err) => next(err));
});



module.exports = router;
