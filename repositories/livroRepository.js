import livroEntity from "../entities/livroEntity.js"

let listaLivro = [
    {
        "idLivro": 2,
        "nomeLivro": "Teste",
        "idCategoria": "Teste",
        "nomeCategoria": "Teste"
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
                    listaLivro[i].nomeCategoria
                )
            )
        }
        return lista;
    }

    cadastrar (entity) {
        listaLivro.push({
            nomeLivro: entity.nomeLivro,
            idCategoria: entity.idCategoria,
            nomeCategoria: entity.nomeCategoria
        })
    }
}