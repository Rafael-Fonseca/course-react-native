let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // true no Node, se rodar no Browser da False porque lá o global se chama window

const constante = comparaComThis
constante() // false porque o this referencia o this da constante.

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false, porque Agora o this referencia o this de obj
comparaComThis(obj) // true pelo motivo acima explicitado.

let comparaComThisArrow = param => console.log(this === param)
console.log('\nARROW')
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

console.log('se usar .bind(var) em arrow function o this não altera.')