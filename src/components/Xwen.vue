<template>
    <div>
        <ul>
         <li v-for="(i,index) in arr" @click="a(index)">
             {{i.name}}
             <ul v-if="page==index">
              <li v-for="u in i.list">
                  {{u.name}}
              </li>
             </ul>
         </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                page:1,
                arr:[
                    {"name":"guonei",
                "list":
                    [{"name":"xijinping"},
                        {"name":"jinzhengen"}
                    ]
        },
                 {"name":"beijing",
                   "list":
                    [{"name":"shs"},
                        {"name":"sddsxs"}
                    ]
            }
                ]
            }
        },
        methods:{
        a(e){
            this.page=e
        }
        }
    }


</script>
<style>
    *{
        list-style: none;
    }
    ul{
        float: left;
        width: 50%;

    }
</style>