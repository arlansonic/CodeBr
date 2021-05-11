Vue.directive('inverter', {
    componentUpdated(el, binding) {
        const invertido = binding.value.split('')
            .reverse().join('')
        el.innerHTML = invertido
    }
})

new Vue({
    el: "#app",
    data: {
        nome: ''
    }
})