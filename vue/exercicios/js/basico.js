new Vue({
        el: ".app", //el de elemento
        data: { //Objeto
            nome: 'Caneta',
            preco: 6.89,
            desconto: 0.15
        },
        methods: { //Metodo
            horaCerta() {
                return new Date().toLocaleString()
            }
        },
        computed: {
            precoComDesconto() {
                return this.preco * (1 - this.desconto)
            }
        }
    }) // ...