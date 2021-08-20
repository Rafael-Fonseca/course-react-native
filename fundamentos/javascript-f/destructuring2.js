console.log('Desestruturação utilizando Arrays []')
console.log('O poder máximo é zuado não vou usar, mas o básicão é de boa\n\n')

const [variavel] = [10]
console.log(variavel)

const [v1, , v2, , v3, v4, v5=0] = ['idx=0', 'idx=1','idx=2','idx=3', 'idx=4']
console.log(v1,v2,v3,v4, v5)
