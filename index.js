const express = require('express');
const server = express();

server.use(express.json());


const produtos = ['Camiseta', 'Bermuda', 'Calça'];

// Retorna um produto
server.get('/produtos/:index', (req, res) =>{
    const {index} = req.params;

    return res.json(produtos[index]);
});


// Retornar todos os produtos

server.get('/produtos', (req, res) => {
    return res.json(produtos)
});

//Criar um novo produto
server.post('/produtos', (req,res) => {
    const {name} = req.body;
    produtos.push(name);

    return res.json (produtos);

});

//Atualizar um produto
server.put('/produtos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    produtos [index] = name;

    return res.json(produtos);
});

//Deletar um produto
server.delete('/produtos/:index', (req, res) => {
    const { index } = req.params;

    produtos.splice(index, 1);
    return res.json ({ message: "O produto foi deletado" })
});

server.listen(3000);