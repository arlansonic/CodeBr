const obj = {
    a: 1, 
    b: 2, 
    c: 3,
    soma(){
        return a + b + c
    }
}

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))

// Forma correta do formato JSON
console.log(JSON.parse('{ "a":1, "b":2, "c": 3}'))
console.log('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')
