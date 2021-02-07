console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Arlan Marreiro'.reverse())

Array.prototype.frist = function(){
    return this[0]
}
console.log([1, 2, 3, 4].frist())
console.log(['A', 'B', 'C', 'D'].frist())

//Substituindo uma função que já existe no JS #Nuca fazer isso

String.prototype.toString = function(){
    return 'Nunca fazer essa papoqueira'
}
console.log('Arlan Marreiro'.reverse())