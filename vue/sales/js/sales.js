// Colocar casas decimais para valores
Vue.directive('money', {
    inserted(el, binding) {
        const amount = parseFloat(el.innerHTML).toFixed(2).replace('.', ',')
            .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')

            el.innerHTML = `${binding.value} ${amount}`
    }
})

new Vue({
    el: "#app",
    data: {
        title: "Relatório de Vendas",
        sales: null
    },
    methods: {
        getSales() {
            fetch('/data/sales.json') // pegar os arquivos Json
                .then(resp => resp.json()) // retornar o JSON
                .then(data => this.sales = data) //console.log(data) - para checar se ta puxando
        }
    },
    mounted() {
        this.getSales()
    }
})