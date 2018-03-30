<template>
<div>
<table>
<tr>
    <td>学号</td>
    <td>姓名</td>
    <td>年龄</td>
</tr>
    <tr v-for="i in arr">
        <td>{{i.id}}</td>
     <td>{{i.user}}</td>
     <td>{{i.pass}}</td>
     </tr>
</table>
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
        this.$http.get('http://localhost:8000')
        .then((e)=>this.arr=e.body)
    }

}

</script>
<style>
</style>