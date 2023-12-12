var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
let users= [
  {
     "id": 1,
     "name": "admin",
     "name": "123",
   }
 ]

/* GET users listing. */
//pra terminar isso direito eu preciso do redux pronto
router.route('/')
.get((req, res, next) => {
  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(users);

})
.post((req, res, next) => {
  let proxId = 1 + users.map(t=> t.id).reduce((x,y) =>Math.max(x,y));
  let users = {...req.body, id: proxId}
  users.push(users)

  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(users);

})
//rota com id especifico(usar pra usar um .edit possivelmente mais tarde)
router.route('/:id')
.delete((req, res, next) => {

  users - users.filter(function(value,inder,arr){//usando splice e usando ja o jsonserver pra pegar os dados
      return value.id != req.params.id;
  });
  
  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);

})
.put((req, res, next) => {
  let index = users.map(t=>t.id).indexOf(req.params.id);
  users.splice(index,1,req.body);

  res.statusCode=200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
  });

module.exports = router;
