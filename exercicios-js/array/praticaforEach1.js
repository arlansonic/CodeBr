const bancos = ['CSMB','SGDB','TSDB','PBDB','PADB']

bancos.forEach(function(nome, indice){
    console.log(`${indice} ${nome}`)
})

console.log('-----')
bancos.forEach(nome => console.log(nome))


