const bancos = {
    CSMB:[{
        cliente: 'NEWLAND'
    },{
        cliente: 'COMPAL'
    },{
        cliente: 'LENOVO'
    },{ 
        cliente: 'DELL'
    }],
    SGDV:[{
        cliente: 'ADATA'
    },{
        cliente: 'LITEON'    
    }],//Função para mostrar mostrar se é ou não ou banco
    bancoCS(){
        if(this.CSMB.cliente == 'NEWLAND'){
            return `Cliente: ${this.CSMB}`
        }
        else if (this.CSMB.cliente == 'COMPAL' ){
            return `Cliente: ${this.CSMB}`    
        }
        else if(this.CSMB.cliente == 'LENOVO'){
            return `O cliente selecionado é do Banco: ${this.CSMB}`
        }
        else if(this.CSMB.cliente == 'DELL') {
            return `O cliente selecionado é do Banco: ${this.CSMB}`
        }
        else if(this.SGDV.cliente == 'ADATA'){
            return `O cliente selecionado é do Banco: ${this.SGDV}`
        }
        else if(this.SGDV.cliente == 'LITEON' ){
            console.log(`O cliente selecionado é do Banco: ${this.SGDV}`)
        }else {
            console.log('Nenhum Banco encontrado!!!!')
        }
    },
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
        if(this.TSDB.cli1 == 'HUMAX' || this.TSDB.cli2 == 'TECHNICOLOR'){
            console.log(`O cliente selecionado é do Banco: ${this.TSDB}`)
        }else if(this.PBDB.cli1 == 'POS' || this.PBDB.cli2 == 'QUECTEL' || this.PBDB.cli3 == 'ASUS' || this.PBDB.cli4 == 'ASROCK'){
            console.log(`O cliente selecionado é do Banco: ${this.PBDB}`)
        }else if (this.PADB.cli1 == 'SAMGECOM'){
            console.log(`O cliente selecionado é do Banco: ${this.PADB}`)
        }else{
            return 'Nenhum banco encontrado'
        }
    }
}
    
}

    const CS =  {                
        CSMB:{
                    
        },
        bancoCS(){
            return (`O cliente selecionado é do Banco: ${this.CSMB.cliente}`)                  
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
  

    Object.setPrototypeOf(CS, bancos)
    // const CS = Object.create(bancos)
    // console.log(Object.keys(CSMB))
    CS.bancoCS('NEWLAND')
    console.log(CS.bancoCS())
    // Object.setPrototypeOf(bancos, banco2)
    // Object.setPrototypeOf(banco2, CR)
    

    // bancos.banco1('SGDB')
    
    
    // bancos.CS('NEWLAND')
    // bancos.CS()