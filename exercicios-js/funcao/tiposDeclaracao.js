// Funciton declaration - Consegue puxar ele no console.log antes mesmo de ser declarado

function soma(x, y){
    return x + y
}
console.log(soma(1,2))

// Function Expression - Só consegue puxar depois de declarado a ' function '

const sub = function(x, y){
    return x - y
}
console.log(sub(4, 4))

// Named Function expression - Só consegue puxar depois de declarado a ' function '

const mult = function mult(x, y){
    return x * y
}

console.log(mult(7, 7))