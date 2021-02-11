const bancos = [

    {csmb: 'LENOVO - DELL - COMPAL - NEWLAND ', ip: '10.58.66.184', unidade: 'CS'},
    {sgdv: 'ADATA - LITEON', ip: '10.58.0.194',unidade: 'CS'},
    {tsdb: 'TECNHICOLOR - HUMAX', ip: '10.57.64.182',unidade: 'CR'},
    {padb: 'SAMGECOM', ip: '10.57.64.172',unidade: 'CR'},
    {pbdb: 'POS - QUECTEL - ASUS - ASROCK',unidade: 'CR'}

]

// Praticas REDUCE
// const mostrarBancos = (resultado, csmb) => resultado && csmb 
// console.log(bancos.map( a => a.csmb).reduce(mostrarBancos))

// Praticas MAP

// Praticas Filter
// const mostrarBancos = bancos  => bancos.csmb = 'LENOVO'
const mostrarBancos = bancos.map( a => a.csmb).reduce(function(inicial){
    console.log(inicial)
   
    return console.log(bancos.inicial)
})

// console.log(bancos.filter(mostrarBancos))

// Praticas forEach