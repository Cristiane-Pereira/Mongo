const mongoose =require('mongoose')
const Schema = mongoose.Schema

const Produtos = new Schema({
    produtos: {
        type:String,
        require:true
    },
    preço: {
        type:Number,
        require:true
    },
    imagem: {
        type:String,
        require:true
    },
})

mongoose.model('produtos',Produtos)