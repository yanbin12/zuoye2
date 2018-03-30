<template>
    <div>
        <ul v-for='i in arr'>
            <li v-for='k in i'>{{k}}</li>
        </ul >
        
    </div>
</template> 

<script>
    export default{
        
        data(){
            return{
                arr:[]
            }
        },
        created(){
            this.$http.get('http://localhost:8000').then((e) =>this.arr = e.body)
        },
        methods:{}
    }
</script>
<style></style>