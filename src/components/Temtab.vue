<template>
    <div>
        <ul>
            <li
                    v-for="(item,index) in tabs"
                    :class="{active:index == num }"
                    @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div
                    v-for='(itemCon,index) in tabContents'
                    v-show=" index == num">{{itemCon}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                tabs: ["选项一", "选项二","选项三","选项四"],
                tabContents: ["内容一", "内容二","内容三","内容四"],
                num: 0
            }
        },
        methods: {
            tab(index) {
                this.num = index;
            }
        }
    }
</script>

<style scoped>
    ul{
        width: 25%;
        list-style: none;
        overflow: hidden;
        margin: 0 auto;
    }
    ul li{
        margin-right: 30px;
        float: left;
    }
    .tabCon{
        margin-top: 20px;
    }
    .c{
        color: red;
    }
</style>
