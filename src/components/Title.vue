<template>
<div>
    {{msg}}
<button @click='a'>+</button>
    <button @click='b'>-</button>
    <button @click='c'>*</button>
    {{final}}
    <p v-for='(item,index) in arr'>{{item}}</p>
    <!--item每一项-->
</div>
</template>
<script>
    export default {
       data(){//数据
           return{
                msg:2,
               arr:[1,2,3,4,5,6,7,8]
           }

       },
        computed:{//计算
          final(){
              return this.msg+1
          }
        },
        methods:{//方法
                a(){
                    this.msg++
                },
            b(){
                    this.msg--
            },
            c() {

                 this.msg=this.msg*this.msg

            }

            }
    }
</script>
<style>
    h6{
        background: red;
        color: #0a1255;
    }
</style>