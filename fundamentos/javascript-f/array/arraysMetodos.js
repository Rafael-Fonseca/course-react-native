const pilotos = ['Sena', 'Shucmaker', 'Massa', 'Barrichelo']
console.log(pilotos)
pilotos.pop() // Retira o último indice
console.log(pilotos)

pilotos.push('Fitipaldi')
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no indice 0
console.log(pilotos)

// .splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Barrichelo')
console.log(pilotos)

// remover
pilotos.splice(3,1) // Remove 1 a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Retorna um novo array
console.log('Alguns pilotos: ', algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0,2) // Retorna um novo array
console.log('Alguns pilotos2: ', algunsPilotos2)
