import livroEntity from "../entities/livroEntity.js"

let listaLivro = [
    {
        "idLivro": 2,
        "nomeLivro": "Teste",
        "idCategoria": 1,
        "categoriaLivro": "Teste"
    }
]

export default class livroRepository {

    listar () {
        let lista = []
        for(let i=0;i<listaLivro.length;i++) {
            lista.push(
                new livroEntity(
                    listaLivro[i].idLivro,
                    listaLivro[i].nomeLivro,
                    listaLivro[i].idCategoria,
                    listaLivro[i].categoriaLivro
                )
            )
        }
        return lista;
    }

    cadastrar (entity) {
        listaLivro.push({
            idLivro: entity.idLivro,
            nomeLivro: entity.nomeLivro,
            idCategoria: entity.idCategoria,
            categoriaLivro: entity.categoriaLivro
        })
    }

    obter (id) {
        return listaLivro.filter(x => x.idLivro == id);
    } 

    obterCategoria(id) {
        return listaLivro.filter(x => x.idCategoria == id)
    }

    deletar (id) {
        listaLivro = listaLivro.filter(x => x.idLivro != id);
    }
}