const alunos = [
    {nome:'joao', nota: 10, bolsa: false},
    {nome:'pedro', nota: 9, bolsa: false},
    {nome:'maria', nota: 8, bolsa: true},
    {nome:'ana', nota: 7, bolsa: true},
]

// Desafio 1: Todos são bolsistas?
let vetor = alunos.map(aluno => aluno.bolsa).reduce((acum, atual)=> acum && atual)
console.log('Todos são bolsistas: ', vetor)
// Desafio 2: Algum aluno é bolsista?
vetor = alunos.map(a=>a.bolsa).reduce((acum, atual)=> acum || atual)
console.log('Algum aluno é bolsista: ', vetor)
