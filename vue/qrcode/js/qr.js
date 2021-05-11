new Vue({
    el: "#app",
    data:{
        title: "Gerador QrCode",
        text: "http://10.58.64.185:8081/workshop/php/view/LOGIN/",
        qrcode: new QRious({size: 300})
    },
    computed:{
        newQRCode(){
            this.qrcode.value = this.text
            return this.qrcode.toDataURL()
        }
    // },
    // methods:{
    //     onData(event){
    //         this.text = event.target.value
    //     }
    }
})