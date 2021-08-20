const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function(a,b,operacao=soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3,4, function(x,y){
    return x-y
})
imprimirResultado(3,4, (x,y) => x*y)

const pessoa = {
    falar: function(){
        console.log('falar')
    },
    falar2(){ //não anônima
        console.log('falar2')
    },
    falar3: () => console.log('falar3')
}

pessoa.falar()
pessoa.falar2()
pessoa.falar3()