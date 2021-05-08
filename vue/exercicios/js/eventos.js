new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
        contador: 0
    },
    methods: {
        add() {
            this.contador++
        },
        atualizarPosicao(e) {
            this.x = e.clientX,
                this.y = e.clientY
        },
        alerta() {
            alert('Enter!')
        }
    }
})