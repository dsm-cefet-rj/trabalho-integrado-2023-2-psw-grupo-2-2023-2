var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const usuarios = require('../models/usuarios')
router.use(bodyParser.json());


router.route('/users')
.get(async (req, res, next) => {

  try{
      const usuariosBanco = await usuarios.find({}).maxTime(1000);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(usuariosBanco);
  }catch(err){
      next(err);
  }

})


.post((req, res, next) => {
    
  usuarios.create(req.body)
  .then((usuario) =>{
      console.log('usuario criado' , usuario);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(usuario);
  }, (err) => next(err))
  .catch((err) => next(err));

})


router.route('/users/:id')
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








router.route('/campeonato/:id')
.get((req, res, next) => {
    campeonatos.findById(req.params.id)
        .then((resp) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp);
        
        },(err) => next(err))
        .catch((err) => next(err));
})
.delete((req, res, next) => {
    campeonatos.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(resp.id);
    
    },(err) => next(err))
    .catch((err) => next(err));
})

.put((req, res, next) => {
    campeonatos.findOneAndUpdate(req.params.id,{
        $set: req.body
    }, { new: true})
    .then((campeonato) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(campeonato);
    
    },(err) => next(err))
    .catch((err) => next(err));
})


module.exports = router;
