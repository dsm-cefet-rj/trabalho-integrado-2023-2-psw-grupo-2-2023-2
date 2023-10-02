const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote 'cors'
const app = express();
const port = 5000;
const fs = require('fs');

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
};
app.use(cors(corsOptions));


const usuariosData = fs.readFileSync("../frontend/src/dados/Usuarios/dadosUsuarios.json");
const usuarios = JSON.parse(usuariosData).Dados;


app.post('/usuarios', (req, res) => {
  const { username, senha, idTeam, verificaSenha } = req.body;
  

  
  if (senha !== verificaSenha) {
    return res.status(400).json({ message: 'Senhas não coincidem' });
  }

  const usuarioExistente = usuarios.find(user => user.Usuários.Username === username);

  if (usuarioExistente) {
    return res.status(400).json({ message: 'Este username já está em uso' });
  }



  const novoUsuario = {
    Usuários: {
      Username: username,
      Senha: senha,
      idTeam: idTeam,
      TeamsSeguidos: [],
      CampeonatosSeguidos: []
    }
  };

  usuarios.push(novoUsuario);

 
  fs.writeFileSync("../frontend/src/dados/Usuarios/dadosUsuarios.json", JSON.stringify({ Dados: usuarios }));

  console.log('Cadastro bem-sucedido!');
  return res.status(201).json({ message: 'Cadastro bem-sucedido!' });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});