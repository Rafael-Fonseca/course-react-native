let dobro = function(param){
    return 2 * param
}

dobro = (param) => {
    return 2 * param
}

dobro = param => {
    return 2 * param
}

dobro = _ => {
    return 2 * _
}

dobro = _ => 2*_ //return implícito

//preferível
dobro = valor => 2*valor
console.log(dobro(Math.PI))

let diga = function(){
    return 'Olá'
}

//O professor prefere
diga = () => 'Olá'

//Eu prefiro
diga = _ => 'Olá!'
console.log(diga())