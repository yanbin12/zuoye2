<template>
<div> 
    
<div id="box">


                        <div class="box-content">
                <div class="box-left" @mousemove="a()">
                    <div class="code"><img src="../assets/icon_code_.png"></div>
                <div class="code-one"><span>二维码登陆</span></div>
                </div>
                <div class="box-right" @mousemove="b()">
                  <span>邮箱账号登陆</span>
                </div>
                <div v-show="show==1" class="left-con">
<div class="left-con-one"><h3>网易云大师   手机版扫码登陆</h3></div>
<div class="left-con-two"><span>官方App更安全</span>    <a href="#">立即下载</a></div>
<div class="img-code">
    <img src="../assets/getUrlQrcode.jpg"/>
</div>
        <div class="dian"> <div class="dian-one"><img src="../assets/applogin.png" alt=""></div>  
        <div class="dian-two"><h4>网易邮箱大师电脑版</h4><h5>登陆更便捷，工作更高效</h5><h5><a href="#">立即下载>></a></h5></div> </div>  
                </div>
                <div v-show="show==0" class="right-con">

                    user:<input type="text" id="user" /><br>
                    pass:<input type="text" id="pass" /><br>
                    <button id="btn" @click="bt(arr)">登陆</button>
                    <button id="btn1">注册</button>
                              </div>
                              </div>
</div>
  
  </div>
 
</template>
<script>
export default{
  
    data(){
        return{
              show:true,
                 arr:[]
        }
    },
 methods:{
        a(){
        
         this.show=true
     },
        b(){
         this.show=false
     },
     bt(arr){
       	for(var i=0;i<arr.length;i++){
					if(user.value==arr[i].name && pass.value==arr[i].pass){
						
						return	console.log('登陆成功');
					}else{
						console.log('登陆失败')
					}
     }
 },
   created(){
        this.$http.get('http://localhost:8000')
        .then((e)=>this.arr=e.body)
    }

}
}
</script>
<style>
*{
    padding:0;
    margin:0;
    border:0;
    font-size:12px;
    font-weight:normal;
    text-decoration:none;
    list-style-type:none;
}
 #box{
     width: 1000px;
     height: 600px;
     margin: 0 auto;
     background: url(../assets/banner.jpg) no-repeat;
 }
 .box-content{
     width: 295px;
     height: 460px;
     background: #ffffff;
     float: left;
     margin-left: 600px;
     margin-top: 70px;
 }
 .box-left{
     width: 147px;
     height:47px;
     float: left;
 }
 .box-right{
     width: 148px;
     line-height: 47px;
     height: 47px;
     float: right;
 }
.code{
    float: left;
    margin: 17px 10px 0px 28px; ;
}
.code-one{
    float: left;
    line-height: 47px;
      height: 47px;
}
.code-one span{
    color:#626262;
}
.left-con,.right-con{
    width: 295px;
    float: left;
    height: 413px;
}
.left-con-one{
    width: 100%;
    height: 55px;
    padding-top: 20px;
    box-sizing: border-box;
}
.left-con-one h3{
    font-size: 14px;
    
}
.left-con-two{
    width: 100%;
    height: 19px;
}
.left-con-two h3{
    font-size: 14px;
    padding-right: 10px;
    
}
.img-code{
    width: 100px;
 margin: 30px 70px;
}
.dian{
    width: 100%;
    height: 67px;
}
.dian-one{
    float: left;
    width: 88px;
    height: 67px;
    margin-right: 10px;
    margin-left: 30px;
}
.dian-two{
    float: left;
    text-align: left;
 }
 input{
     height:20px ;
     background-color:lightgray;
 }
#user{
    margin: 15px 0;
}
button{
    border-radius: 10px;
    background: lightblue;
    width: 30px;
    height: 30px;
    margin: 30px
}
</style>


