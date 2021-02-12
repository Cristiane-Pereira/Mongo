const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

//model 
require('./src/models/Produtos')
const Produtos = mongoose.model('produtos')

//conexão db
require('./src/db/connect')

app.get('/produtos', async (req, res) =>{
    const produtosResponse = await Produtos.find()
    const produtosJson = await produtosResponse

    return res.json(produtosJson)
})


app.post('/produtos', async (req, res) =>{
   const novoProdutos = new Produtos({
       produtos: req.body.produtos,
       preço: req.body.preço,
       imagem: req.body.imagem
   });

   novoProdutos.save()

   res.json({messege:"Cadastro concluido com sucesso", produtos:novoProdutos})
});


app.listen(3333)