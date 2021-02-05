    const banco1 = {
    
        CSMB:{
            cli1: 'NEWLAND',
            cli2: 'COMPAL',
            cli3: 'LENOVO',
            cli4: 'DELL'
        },
        SGDV:{
            cli1: 'ADATA',
            cli2: 'LITEON'
        },bancoCS(){
            if(this.CSMB == 'NEWLAND' || this.CSMB == 'COMPAL' || this.CSMB == 'LENOVO' || this.CSMB == 'DELL'){
                console.log(`O cliente selecionado é do Banco: ${this.CSMB}`)
            }else if(this.SGDV == 'ADATA' || this.SGDV == 'LITEON' ){
                console.log(`O cliente selecionado é do Banco: ${this.SGDV}`)
            }
        }
    }

    const banco2 = {
        TSDB: {
            cli1: 'HUMAX',
            cli2: 'TECHNICOLOR'
        },
        PBDB: {
            cli1: 'POS', 
            cli2: 'QUECTEL',
            cli3: 'ASUS', 
            cli4: 'ASROCK'
        },
        PADB: {
            cli1: 'SAGEMCOM',
            bancoCR(){
            if(this.TSDB == 'HUMAX' || this.TSDB == 'TECHNICOLOR'){
                console.log(`O cliente selecionado é do Banco: ${this.TSDB}`)
            }else if(this.PBDB == 'POS' || this.PBDB == 'QUECTEL' || this.PBDB == 'ASUS' || this.PBDB == 'ASROCK'){
                console.log(`O cliente selecionado é do Banco: ${this.PBDB}`)
            }else if (this.PADB == 'SAMGECOM'){
                console.log(`O cliente selecionado é do Banco: ${this.PADB}`)
            }else{
                return 'Nenhum banco encontrado'
            }
        }
    }
}
    const bancos = {
        CCBS: 'CS',
        CCBR: 'CR',
        bancoCS(){
            return `: ${this.CSMB} : ${this.SGDV}`
        }
    }

    Object.setPrototypeOf(bancos, banco1)
    Object.setPrototypeOf(bancos, banco2)
    // Object.setPrototypeOf(banco2, CR)
    console.log(bancos.banco1)
    // bancos.banco1('SGDB')
    
    
    // bancos.CS('NEWLAND')
    // bancos.CS()