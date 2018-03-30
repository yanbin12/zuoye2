<template>
    <div>
<ul v-for="(i,index) in arr" @click="a(index)">
    {{i.name}}
    <li v-for="j in i.list" v-show="bin==index">
        {{j.name}}
    </li>
</ul>

    </div>
</template>
<script>
    export default{
        data(){
            return{
                aa:'left',
                    bin:-1,
                arr:[
                    {name:'one',list:[{name:'我'},{name:'你'}]},
                    {name:'two',list:[{name:'你'},{name:'他'}]}
                ]
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
div{
    cursor: pointer;

}
</style>