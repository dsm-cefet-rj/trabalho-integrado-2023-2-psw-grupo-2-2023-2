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
        console.log('Usuário criado' , usuario);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuario);
    }, (err) => next(err))
    .catch((err) => next(err));

})


router.route('/users/:id')
.get((req, res, next) => {
    usuarios.findById(req.params.id)
        .then((resp) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp);
        
        },(err) => next(err))
        .catch((err) => next(err));
})
.delete((req, res, next) => {
    usuarios.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(resp.id);
    
    },(err) => next(err))
    .catch((err) => next(err));
})

.put((req, res, next) => {
    usuarios.findOneAndUpdate(req.params.id,{
        $set: req.body
    }, { new: true})
    .then((usuario) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(usuario);
    
    },(err) => next(err))
    .catch((err) => next(err));
})


module.exports = router;



