<template>
    <div>
<div id="box">
        <li @click='a'>选择1</li>
        <li @click='b'>选择2</li>
        <li @click='c'>选择3</li>
        <li @click='d'>选择4</li>
        <div v-show="xianshi" id="q">内容1</div>
        <div v-show="yinchang" id="w">内容2</div>
        <div v-show="yinchang" id="e">内容3</div>
        <div v-show="yinchang" id="r">内容4</div>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            xianshi:true,
            yinchang:false
        }
    },
    methods:{
        a(){

            e.style.display = 'none';
            w.style.display = 'none';
            q.style.display = 'block';
            r.style.display = 'none';
        },
        b(){

            e.style.display = 'none';
            w.style.display = 'block';
            q.style.display = 'none';
            r.style.display = 'none';
        },
       c(){

            e.style.display = 'block';
            w.style.display = 'none';
            q.style.display = 'none';
            r.style.display = 'none';
        },
        d(){
            e.style.display = 'none';
            w.style.display = 'none';
            q.style.display = 'none';
            r.style.display = 'block';
        }
    }
}
</script>

<style>

    *{
        list-style: none;
    }
    #box{
        width: 400px;
        height: 350px;
        margin: 0 auto;
    }
    #box div{
        float: left;
        width: 400px;
        height: 300px;
        background: #00a7ea;
    }
    li{
        width:25%;
        background: #0b97c4;
        height: 50px;
        line-height: 50px;
        text-align: center;
        float: left;
    }

</style>