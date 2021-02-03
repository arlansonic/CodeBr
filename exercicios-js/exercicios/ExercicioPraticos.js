/**
 * Exercicio Pratico JS 
 */

function puxarObjeto(){
    this.clientesProducao 
    this.sistemaProducao

}

    const sistemaProducao = {

    sistema: 'Workshop',
    banco: 'CSMB',
    tipoBD: 'ORACLE',
    linguagens:{
        lg1: 'Html',
        Lg2: 'Css',
        Lg3: 'Jquery',
        Lg4: 'Javascript',
        Lg4: 'Node Js'
    },
 }
 const clientesProducao = {
        // CS
        CS:{
        CSMB:{
        cliente1: 'COMPAL',        
        cliente2: 'LENOVO',
        cliente3: 'NEWLAND',
        cliente4: 'DELL',
            },
        SGDV:{
            cliente1: 'ADATA',
            cliente2: 'LITEON'
        }
        },
        CR:{
        TSDB:{
           cliente1: 'TECHNICOLOR',
           cliente2: 'HUMAX',               
        },
        PBDB:{
            cliente1: 'POS',
            cliente2: 'QUECTEL',
            cliente3: 'ASUS',
            cliente4: 'ASROCK',            
        },
        PADB:{
            cliente1: 'SAGEMCOM'
        }
      }
    }
console.log('Unidades Calcomp: '+Object.keys(clientesProducao))
// console.log(sistemaProducao)    
console.log('Bancos CS: '+ Object.keys(clientesProducao.CS))
console.log('Clientes Locados no SGDV: '+Object.values(clientesProducao.CS.SGDV))
console.log('Clientes Locados no CSMB: ' + Object.values(clientesProducao.CS.CSMB))
console.log('--------------------------------')

console.log('Bancos CR: ' + Object.keys(clientesProducao.CR))
console.log('Clientes Locados TSDB: ' + Object.values(clientesProducao.CR.TSDB))
console.log('Clientes Locados PBDB: ' + Object.values(clientesProducao.CR.PBDB))
console.log('Clientes Locados no PADB: ' + Object.values(clientesProducao.CR.PADB))

console.log('-----------Object.entries------------')
console.log('Bancos CS - SGDV: ' + Object.entries(clientesProducao.CS.SGDV))
console.log('Bancos CS - CSMB: ' + Object.entries(clientesProducao.CS.CSMB))
Object.entries(clientesProducao.CS.SGDV).forEach(e =>{
    console.log(`${[0]}: ${[1]}`)
})