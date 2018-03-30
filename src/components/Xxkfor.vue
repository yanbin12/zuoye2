<template>
    <div>
        <div v-for="(i,index) in arr" @click='a(index)'>{{i.name}}</div>

        <div v-for="(i,index) in arr" v-show="bin==index">{{i.content}}</div>

    </div>
</template>
<script>
export default {
    methods:{
        a(e){
            this.bin=e
        }

    },
    data(){
        return {
        bin:0,
            arr:[
                {name:'guoei',content:'sdfs'},
                {name:'bei',content:'2222222222'},
                {name:'jing',content:'sdfs1'},
            ]
        }
    }
    }




</script>
<style>

</style>