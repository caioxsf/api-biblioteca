import livroEntity from "../entities/livroEntity.js";
import livroRepository from "../repositories/livroRepository.js";

export default class livroController {

    listar(req,res) {
        try {
            let livros = new livroRepository().listar();
            return res.status(200).json(livros)
        } catch (error) {
            return res.status(500).json({msg: error.message})
        }
    }

    cadastrar (req,res) {
        try {
            let {nomeLivro, idCategoria, nomeCategoria} = req.body;
            let entity = new livroEntity(new Date().getTime(), nomeLivro, idCategoria, nomeCategoria)

            let repo = new livroRepository();
            repo.cadastrar(entity)

            return res.status(201).json({msg: "Livro cadastrado com sucesso!"})
        } catch (error) {
            return res.status(500).json({msg: ex.message});
        }
    }
}