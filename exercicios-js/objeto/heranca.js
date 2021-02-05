const ferrari = {
    modelo: 'Turbo',
    velMax: 300
}

const volvo = {
    modelo: 'V100',
    velMax: 200
}

console.log(ferrari.__proto___)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto(){ }
    console.log(typeof Object, typeof meuObjeto)
    console.log(Object.prototype, meuObjeto.prototype)
