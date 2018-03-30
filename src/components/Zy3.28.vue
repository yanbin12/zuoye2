<template>
 <div>
  <ul>
   <li v-for="(i,index) in arr">
    <!--{{i}}-->
    <ul v-for="j in i">
     {{j.title}}<br/>{{j.data}}
     <li v-for="k in j.commit">
      {{k.user}}<br/>{{k.content}}
     </li>
    </ul>
   </li>
  </ul>
 </div>
</template>
<script>
    export default {
        data(){
            return{
            arr:{
                status: 1,
                data: [{
                title: "xijinping",
                date: "2018-1-30",
                commit: [{
                    user: "zhangsan",
                    content: "pinglun1"
                }, {
                    user: "lisi",
                    content: "pinglun2"
                }]
            }, {
                title: "jinzhengen",
                date: "2018-1-31",
                commit: [{
                    user: "zhangsan",
                    content: "pinglun1"
                }, {
                    user: "lisi",
                    content: "pinglun2"
                }]
            }, {
                title: "jingguanran",
                date: "2018-3-30",
                commit: [{
                    user: "zhangsan",
                    content: "pinglun1"
                }, {
                    user: "lisi",
                    content: "pinglun2"
                }]
            }]
            }}
        },
        methods:{

        }
    }
</script>
<style></style>