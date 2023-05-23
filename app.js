
const {createApp} = Vue;

createApp({
    data(){
        return{
            num: 0
        }
    },
    methods: {
        sum(){
            this.num++;
        },
        rest(){
            this.num--;
        }
    }
}).mount('#app')