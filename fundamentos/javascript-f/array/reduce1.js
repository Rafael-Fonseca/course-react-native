const alunos = [
    {nome:'joao', nota: 10},
    {nome:'pedro', nota: 9},
    {nome:'maria', nota: 8},
    {nome:'ana', nota: 7},
]

const resultado = alunos.map(a=>a.nota).reduce((acum, atual) => acum+atual, 100)
console.log(resultado)