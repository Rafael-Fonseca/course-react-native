//  Esse método não existe naturalmente - será um map junto com um concat
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8
    }, {
        nome: 'Ana',
        nota: 9,
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8
    }, {
        nome: 'Roberto',
        nota: 7
    }]
}]

/*
Na resolução do professor ao inves de gerar getAlunos ele já passou como
const getAluno = turma => turma.alunos.map(getNota)
console.log(escola.map(getAluno))
*/

const getAlunos = turma => turma.alunos
const getAluno = alunos => alunos.map(getNota) //  --- TypeError: alunos.map is not a function
//   Estava dando este erro porque eu estava usando .map em um objeto {}
const getNota = aluno => aluno.nota
const notasMap = escola.map(getAlunos).map(getAluno)
console.log(notasMap)

/* Para resolver o TypeError: criei uma função que imprime o resultado do .map()
identifiquei o retorno da função como objeto e então criei a função getAlunos
getAlunos retorna o array que eu estava tentando acessar.


  const getAluno = alunos => console.log(alunos, 'next')
  console.log(escola.map(getAluno))
   {
       nome: 'Turma M1',
       alunos: [ { nome: 'Gustavo', nota: 8 }, { nome: 'Ana', nota: 9 } ]
   } next
  
       {
         nome: 'Turma M2',
         alunos: [ { nome: 'Rebeca', nota: 8 }, { nome: 'Roberto', nota: 7 } ]
       } next
           [ undefined, undefined ]
*/

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
//escola.map(getAlunos).map(getAluno)
const notasFlatMap = escola.map(getAlunos).flatMap(getAluno)
console.log(notasFlatMap)

// Da forma do professor ficou ainda mais reduzido
//escola.flatMap(getAluno)