const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c }

console.log(obj1, obj2)

//Metodo 2

const nomeAttr = 'Nota'
const valotAttr = 7.0

const obj3 = {}
obj3[nomeAttr] = valotAttr //Puxando nomeAttr e Juntando com nota 'Metodo 2'
console.log(obj3)

// Metodo 3 

const obj4 = {[nomeAttr]:valotAttr} //Puxando nomeAttr e Juntando com nota 'Metodo 3'
console.log(obj4)

// Metodo 4
const obj5 = {
    funcao1 : function(){ //Forma 1 de inserir função dentro de um Objeto
        // ....
    },
    
    funcao2(){ //Forma simplificada de inserir função dentro do objeto
        // ....... 
    }
}

console.log(obj5)