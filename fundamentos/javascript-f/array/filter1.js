const produtos = [
    {nome:'Notebook', preco: 2499, fragil: true},
    {nome:'iPad Pro', preco: 4199, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = (prod) => 500 < prod.preco
const eFragil = (prod) => prod.fragil

console.log(produtos.filter(eFragil).filter(caro))

// console.log(produtos.filter(function(p){
//     return p.fragil
// } ).filter(function(p){
//     return 500 < p.preco
// }))