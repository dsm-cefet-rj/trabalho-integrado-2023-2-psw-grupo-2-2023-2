var express = require('express');
var router = express.Router();

let usuarios =  [
  {
      "nome" : "Daniel",
      "senha" : "123",
      "id" : 1,
      "idTeams" : 1
  },
  {
      "nome" : "Luiz",
      "senha" : "123",
      "id" : 2,
      "idTeams" : 12
  }

]

router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json(usuarios);
})

.post((req, res, next) => {
  let proxId = 1 + usuarios.map(p=>p.id).reduce((x, y) => Math.max(x,y));
  let usuario = [{...req.body, id:proxId}];
  usuarios.push(usuario);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json(usuario);
})


router.route('/:id')
.delete((req, res, next) => {

  usuarios = usuarios.filter(function(value, index, arr){
      return value.id != req.params.id;
  });

  res.statuscode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json(req.params.id);

})

.put((req, res, next) => {

  let index = usuarios.map(p=> p.id).indexOf(req.params.id);
  usuarios.splice(index,1,req.body);

  res.statuscode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json(req.body);

})


module.exports = router;
