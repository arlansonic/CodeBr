const quaseArray = {
    0: 'Arlan',
    1: 'Katiane',
    2: 'Apollo'
}
console.log(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value: function(){ 
        return Object.values(this)
    },
        enumerable:false
})

console.log(quaseArray[0])

const meuArray = ['Arnei','Angelita','Arlison']
console.log(quaseArray.toString(),meuArray)