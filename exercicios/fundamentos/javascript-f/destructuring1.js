// Exemplos de desempacotamento, no js chamado de desestruturação
const pessoa = {
    nome: 'João',
    idade: 18,
    endereco: {
        rua:'dos bobos',
        numero: 0,
    }
}

console.log('Desestruturação utilizando objetos literais {}')

const {nome, idade, endereco} = pessoa
console.log('Desestruturação 1:')
console.log(nome)
console.log(idade)
console.log(endereco)
console.log()

const {nome: des_nome, idade: des_idade, endereco: des_endereco} = pessoa
console.log('Desestruturação 2:')
console.log(des_nome)
console.log(des_idade)
console.log(des_endereco)
console.log()

//Caso extraia uma variável inexistente, retorna undefined. É possível
// passar valor default, como no exemplo abaixo.
console.log('Desestruturação 3: Variável inexistente e valor defaut')
const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)

console.log('Desestruturação 4: valor em objeto aninhado')
const { endereco: {rua: des_rua, numero, cep}} = pessoa
console.log(des_rua, numero, cep)

console.log('\nSe tentar acessar variável aninhada, a partir de retorno undefined, o código crasha!')
