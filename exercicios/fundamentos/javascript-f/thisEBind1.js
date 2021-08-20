const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre o paradigma funcional e O.O. o this passa a apontar
// para o this da const falar e este this é undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()