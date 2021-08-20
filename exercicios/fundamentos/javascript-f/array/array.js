let aprovados = new Array('bia', 'ana', 'carlos')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3]= 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//.splice(indix_start, quantos_deletar, *args_a_serem_incluidos)
args=['args', 'outro', 'mais 2']
aprovados.splice(1,2, ...args)
console.log(aprovados)
