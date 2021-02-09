// Criando função para simular um Foreach - no caso foi criado o forEach2
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Arlan','Apollo','Katiane']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})