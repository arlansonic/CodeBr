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

    console.log(clientesProducao.CS)
    