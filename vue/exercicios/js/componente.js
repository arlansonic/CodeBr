Vue.component('saudacao', {
    props: ['nome'],
    template: `
    <div>Bom dia {{nome}}!</div>
    `
})

new Vue({
    el: "#app"
})