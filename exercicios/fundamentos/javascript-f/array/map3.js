Array.prototype.meuMap = function(callback){
    retorno = []
    for (let i=0; i < this.length; i++){
        retorno.push(callback(this[i], i , this))
    }
    return retorno
}



const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.55}',
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.meuMap(paraObjeto).meuMap(apenasPreco)
console.log(resultado)