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
//rota com id especifico(usar pra usar um .edit possivelmente mais tarde)
router.route('/:id')
.delete((req, res, next) => {
  res.params.get()
  res.setHeader('Content-Type', 'application/json');
  res.json(times);

});

module.exports = router;
