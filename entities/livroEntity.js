export default class livroEntity {

    #idLivro
    #nomeLivro
    #idCategoria
    #categoriaLivro

    constructor(id,nome,idcat,categoria) {
        this.#idLivro = id;
        this.#nomeLivro = nome;
        this.#idCategoria = idcat;
        this.#categoriaLivro = categoria;
    }

    get idLivro () {return this.#idLivro} 
    set idLivro (value) {this.#idLivro = value}

    get nomeLivro () {return this.#nomeLivro}
    set nomeLivro (value) {this.#nomeLivro = value}

    get idCategoria () {return this.#idCategoria} 
    set idCategoria (value) {this.#idCategoria = value}
    
    get categoriaLivro () {return this.#categoriaLivro} 
    set categoriaLivro (value) {this.#categoriaLivro = value}

    toJSON () {
        return {
            idLivro: this.#idLivro,
            nomeLivro: this.#nomeLivro,
            idCategoria: this.#idCategoria,
            categoriaLivro: this.#categoriaLivro
        }
    }
}