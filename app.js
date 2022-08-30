var app = new Vue ({
    el: '#app',
    data: {
        num:0,
    },
    methods: {
        sumar(){
            this.num++
        },
        restar(){
            this.num--
        }
    }
})