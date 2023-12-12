const mongoose = require('mongoose');

const url= 'mongodb+srv://<username>:<password>@scoutball.mgalr3w.mongodb.net/?retryWrites=true&w=majority'
const username = 'admin';
const password = '1234';
const uri = url.replace("<username>", username).replace("<password>", password);

const connectToDataBase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conexão ao banco de dados realizada com sucesso!")
    } catch (error) {
      console.error(error.message);
      console.log("Ocorreu um erro ao se conectar com o banco de dados.", error)
      process.exit(1);
  }
};

module.exports = connectToDataBase;
