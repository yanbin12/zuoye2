<template>
        <div id="app" class="box">  
            <ul class="tabs clearfix">  
                <li v-for="(tab,index) in tabsName">  
                    <a href="#" class="aaa" @click="tabs(index)" v-bind:class="{active:tab.actived}">{{tab.name}}</a>  
                </li>  
            </ul>  
  
            <div class="cards">  
                <div class="card" style="display: block;">one</div>  
                <div class="card">two</div>  
                <div class="card">three</div>  
            </div>  
        </div>  
</template>

<script>
export default {
    name: 'app',    
    data(){  
       return{
         tabsName: [{  
            name: "HTML",  
            actived: true  
        }, {  
            name: "CSS",  
            actived: false  
        }, {  
            name: "Vue",  
            actived: false  
        }],  
        active: false  
       }
    },  
    methods: {  
        tabs: function(tabIndex) {  
            var tabCard = document.querySelectorAll(".card"),  
                len = tabCard.length;  
            for(var i = 0; i < len; i++) {  
                tabCard[i].style.display = "none";  
                this.tabsName[i].actived = false;  
            }  
            this.tabsName[tabIndex].actived = true;  
            tabCard[tabIndex].style.display = "block";  
        }  
    }  
}
</script>


 <style>  
        * {  
            padding: 0;  
            margin: 0;  
        }  
          
        .box {  
            width: 800px;  
            height: 200px;  
            margin: 0 auto;  
            border: 1px solid #000;  
        }  
          
        .tabs li {  
            float: left;  
            margin-right: 8px;  
            list-style: none;  
        }  
          
        .tabs .aaa {  
            display: block;  
            width: 250px;  
            height: 49px;  
            text-align: center;  
            line-height: 49px;  
            background-color: #5597B4;  
            color: #fff;  
            text-decoration: none;  
        }  
          
        .tabs .aaa.active {  
            height: 47px;  
            background:grey;
            transition: .3s;  
        }  
          
        .cards {  
            float: left;  
        }  
          
        .cards .card {  
            display: none;  
        }  
          
        .clearfix:after {  
            content: "";  
            display: block;  
            height: 0;  
            clear: both;  
        }  
          
        .clearfix {  
            zoom: 1;  
        }  
    </style>  