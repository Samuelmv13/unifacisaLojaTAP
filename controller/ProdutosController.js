const express = require('express');
const router = express.Router();
const Produto = require('../model/Produto');

//Função de middleware para pegar o produto pelo id
const getProdutoPorId = async (req, res, next) => {
    try{
        let produto = await Produto.findById(req.params.id);
        if (produto === null) {
            res.status(404).json({erro: 'Não foi encontrado um produto com o id informado'});
        } else {
            req.produto = produto;
            next();
        }
    } catch (erro) {
        res.status(404).json({erro: 'O id informado não é válido'});
    }
}

// retornar todos os produtos
router.get('/', async (req, res) => {
    res.json(await Produto.find());
});

// retornar o produto com id
router.get('/:id', getProdutoPorId ,(req, res) => {
    res.json(req.produto);
});

// add um produto
router.post('/', async (req, res) => {
    let produto = await Produto(req.body).save();
    res.json(produto);
});

// alterar o produto com id informado
router.put('/:id', getProdutoPorId, async(req, res) => {
    await Produto.update(req.body);
    res.send('O produto foi atualizado.');
});

// excluir o produto informado
router.delete('/:id', getProdutoPorId, async (req, res) => {
    await req.produto.delete();
    res.send('O produto foi removido');
});

module.exports = router;