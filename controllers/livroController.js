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
            let {nomeLivro, idCategoria, categoriaLivro} = req.body;
            let entity = new livroEntity(new Date().getTime(), nomeLivro, idCategoria, categoriaLivro)

            let repo = new livroRepository();
            repo.cadastrar(entity)

            return res.status(201).json({msg: "Livro cadastrado com sucesso!"})
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    obter (req,res) {
        try {
            let {id} = req.params;
            let repo = new livroRepository();
            let lista = repo.obter(id);

            if(lista.length == 0)
                return res.status(404).json({msg: "Livro não encontrado!"})
            return res.status(200).json({lista});   
        } catch (error) {
            return res.status(500).json({msg: error.message}); 
        }
    }

    obterCategoria (req,res) {
        try {
            let {id} = req.params;
            let repo = new livroRepository();
            let lista = repo.obterCategoria(id);

            if(lista.length == 0)
                return res.status(404).json({msg: "Livro não encontrado!"})
            return res.status(200).json({lista});   
        } catch (error) {
            return res.status(500).json({msg: error.message}); 
        }
    }

    deletar (req,res) {
        try {
            let {id} = req.params;
            let repo = new livroRepository();
            let livroExistente = repo.obter(id);

            if(livroExistente.length == 0)
                return res.status(200).json({msg: "Não foi possível encontrar esse livro!"}); 
            else {
                repo.deletar(id);
                return res.status(200).json({msg: "Livro deletado com sucesso!"});   
            }
            
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }

    alterar (req,res) {
        try {
            let entity = new livroEntity();
            let {idLivro, nomeLivro, idCategoria, categoriaLivro} = req.body;

            if(idLivro && nomeLivro && idCategoria && categoriaLivro) {
                entity.idLivro = idLivro,
                entity.nomeLivro = nomeLivro;
                entity.idCategoria = idCategoria;
                entity.categoriaLivro = categoriaLivro;

                let repo = new livroRepository();
                repo.alterar(entity);
                return res.status(200).json({msg: "Livro alterado com sucesso!"});
            } else {
                return res.status(400).json({msg: "Parâmetros inválidos!"});
            }
            
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }


}