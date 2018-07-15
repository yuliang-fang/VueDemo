<template>
    <div>
        <button @click="increment">+</button>
        <button v-on:click="decrement">-</button>
        <p><span>{{num}}</span></p>
    </div>
</template>


<script>
export default {
    props:["num"],    //组建之间的值传递，num来自父组建
    data(){
        return{
            num:0,
        }
    },
    methods:{
        increment(){
            this.num++;
        },
        decrement(){
            this.num--;
        }
    }
}
</script>

