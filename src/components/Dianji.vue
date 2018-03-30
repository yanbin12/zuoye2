<template>
    <div>
        <div id="aaaa" :style="{display:aa}"></div>
        <button @click='a'>隐藏</button>
        <button @click='b'>出来</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aa:'block'
    }
    },
    methods:{
        a(){
            this.aa="none"
//            this.aa=(this.aa==black)?'none':'block'
        },
        b(){
            this.aa="block"
        }
    }
}
</script>
<style>
#aaaa{
    width: 100px;
    height: 100px;
    background: red;
}
</style>