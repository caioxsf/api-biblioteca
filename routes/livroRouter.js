import express from 'express'
import livroController from '../controllers/livroController.js';

const router = express.Router();
const ctrl = new livroController();

router.get("/", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Retorna uma lista com todos os livros cadastrados"
    ctrl.listar(req,res);
});
router.post("/cadastrar", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Cadastra um livro"
    ctrl.cadastrar(req,res);
});
router.put("/alterar", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Altera um livro"
    ctrl.alterar(req,res)
});
router.get("/:id", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Retorna um livro pelo ID digitado"
    ctrl.obter(req,res)
});
router.get("/categoria/:id", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Retorna os livros pelo ID da categoria digitada"
    ctrl.obterCategoria(req,res);
});
router.delete("/deletar/:id", (req,res) => {
    // #swagger.tags = ['Livros']
    // #swagger.summary = "Deleta um livro pelo ID digitado"
    ctrl.deletar(req,res)
});


export default router;