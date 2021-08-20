const alunos = [
    {nome:'João', nota: 10},
    {nome:'Maria', nota: 8},
]

//Imperativo
let total_imp = 0
for (let i = 0; i < alunos.length; i++){
    total_imp += alunos[i].nota
}
console.log(total_imp/alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (nota1, nota2) => nota1 + nota2

const total_decl = alunos.map(getNota).reduce(soma)
console.log(total_decl/alunos.length)