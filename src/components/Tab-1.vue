<template>
    <div>
        <div v-for="(i,index) in arr.data" @click="a(index)">
            {{i.name}}
        </div>
        <div v-for="(i,index) in arr.data" v-show="bin==index">
            {{i.content}}
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                bin:0,
                arr:{flag:0,data:[{name:1,content:'content1'},
                                  {name:2,content:'content2'}]
                     }
            }

        },
        methods:{
            a(e){
               this.bin=e
            }
        }
    }
</script>
<style>

</style>