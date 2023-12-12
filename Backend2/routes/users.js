var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('./cors');
router.use(bodyParser.json());

// Array para armazenar os usuários
let users = [{
     "id": 1,
     "name": "admin",
     "password": "123",
     'idteam':'12'
    }
];

/* GET users listing. */
router.route('/')
  .get( cors.corsWithOptions,(req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  })
  .post( cors.corsWithOptions,(req, res, next) => {
    // Inicializa o array se estiver vazio
    if (users.length === 0) {
      users = [{ id: 0 }]; // Adiciona um valor inicial
    }

    // Calcula o próximo ID
    let proxId = 1 + users.map(t => t.id).reduce((x, y) => Math.max(x, y), 0);

    // Adicionando o novo usuário ao array
    let newUser = { ...req.body, id: proxId };
    users.push(newUser);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(newUser);
  });

// Rota com id específico
router.route('/:id')
  .delete( cors.corsWithOptions,(req, res, next) => {
    users = users.filter(function (value, index, arr) {
      return value.id != req.params.id;
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put( cors.corsWithOptions,(req, res, next) => {
    let index = users.map(t => t.id).indexOf(req.params.id);
    users.splice(index, 1, req.body);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  });

module.exports = router;
