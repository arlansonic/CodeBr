class Cs{
    constructor(csmb, sgdv){
        this.csmb = ['LENOVO','COMPAL','NEWLAND','DELL']
        this.sgdv = ['LITEON', 'ADATA']
    }
}

class Cr extends Cs{
    constructor(csmb, sgdv, tsdb, pbdb, padb){
        super(csmb, sgdv)
        this.tsdb = ['HUMAX','TECNICOLOR']
        this.pbdb = ['POS','QUECTEL','ASUS','ASROCK'] 
        this.padb = ['SAGEMCOM']
    }
}


class Bancos extends Cr{
    constructor(){
        super('CSMB', 'SGDV')
    }

}

const banco = new Bancos
console.log(banco)