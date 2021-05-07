new Vue({
    el: '#app',
    data: {
        nome: 'Arlan Marreiro',
        link: "https://www.youtube.com/channel/UCcMcmtNSSQECjKsJA1XH5MQ"
    },
    watch: { //Pegar as alterações das mudanças de atributos de qualquer funções ou objetos
        nome(novoValor) {
            console.log(novoValor.toUpperCase())
        }
    }
})