var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

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
.get((req, res, next) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(times);

})
.post((req, res, next) => {
  let proxId = 1 + times.map(t=> t.id).reduce((x,y) =>Math.max(x,y));
  let times = {...req.body, id: proxId}
  times.push(times)

  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(times);

})
//rota com id especifico(usar pra usar um .edit possivelmente mais tarde)
router.route('/:id')
.delete((req, res, next) => {

  times - times.filter(function(value,inder,arr){//usando splice e usando ja o jsonserver pra pegar os dados
      return value.id != req.params.id;
  });
  
  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);

})
.put((req, res, next) => {
  let index = times.map(t=>t.id).indexOf(req.params.id);
  times.splice(index,1,req.body);

  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
  });

module.exports = router;
