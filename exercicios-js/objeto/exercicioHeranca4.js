function TestObjeto(){}
console.log(TestObjeto.prototype)

const obj1 = new TestObjeto
const obj2 = new TestObjeto


TestObjeto.prototype.banco = 'CSMB'
TestObjeto.prototype.mostrar = function(){
    console.log(`Nome do Banco: ${this.banco}`)
}
obj1.mostrar()

obj2.banco = 'SGDV'
obj2.mostrar()

//Criando obj3 do padrão estanciando o TesteObjeto
const obj3 = new TestObjeto
obj3.banco = 'TSDB'
obj3.mostrar()

//Criando obj4 mas sem padrão de estancia do TesteObjeto
const obj4 = {}
obj4.__proto__ = TestObjeto.prototype //Colocando o OBJ4 para herdar tudo do TesteObjeto
obj4.banco ='PBDB'
obj4.mostrar()