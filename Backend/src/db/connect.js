const mongoose = require('mongoose')


function connect() {
    mongoose
    .connect('mongodb://localhost/RecodePro',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
      .then(() =>{
          console.log("Conectado com o Banco RecodePro!!!");
      })
      .catch((error) => {
          console.log(`Erro ao tentar a conexão ${error}`);
      });
}

module.exports = connect()
 