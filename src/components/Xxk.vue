<template>
    <div>
        <div @click='a(0)'>1</div>
        <div @click='a(1)'>2</div>
        <div :style="{display:bin==0?'block':'none'}">1</div>
        <div :style="{display:bin==1?'block':'none'}">2</div>
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
            bin:0
        }
    }
    }




</script>
<style>

</style>