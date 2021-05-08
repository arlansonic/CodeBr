Vue.component('contador',{
    data:function(){
        return {
            contador: 0
        }
    },
    methods:{
        add(){
            this.contador++
        }
    },
        template: `
        <div>
            <span>{{contador}}</span>
            <button @click="add">+1</button>
            <button @click="contador--">-1</button>
        </div>
        `
   
})

new Vue({
    el: "#app"
})