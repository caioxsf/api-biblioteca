import express from 'express'
import livroController from '../controllers/livroController.js';

const router = express.Router();
const ctrl = new livroController();

router.get("/", ctrl.listar);
router.post("/cadastrar", ctrl.cadastrar);
router.get("/:id", ctrl.obter);
router.get("/categoria/:id", ctrl.obterCategoria);
router.delete("/deletar/:id", ctrl.deletar);

export default router;