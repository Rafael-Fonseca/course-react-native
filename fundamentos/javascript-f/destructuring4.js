console.log('Em escopo de função, com Array\n')

function rand([min=0, max=1000]){
    if(min > max) [min, max] = [max, min]
    return(Math.floor(Math.random()*(max - min)+ min))
}

const obj = [50, 40]
console.log(rand(obj))
console.log(rand([955, 1000]))
console.log(rand([2000]))
console.log(rand([,20]))
console.log(rand([]))
// console.log(rand())