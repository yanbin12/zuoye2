<template>
	
	<div>
		<div class="box">
			<div  class="add" >
				<button @click='add' class="tian" v-if='uid==0'>添加新闻</button>
				<div class="bin" v-if='uid==1'>
					     user:<input type="text" id="user"><br>
					     pass:<input type='text'  id="pass"><br>
					<button @click='btn' class="btn">提交</button>
				</div>
			</div>
			<div class="rows" v-for='(i,index) in arr'>
				<div class='row'>
					<span @click='aaa(index)'>{{'名字  : '+i.tit+'  年龄 : '+i.con | length }}</span>  <button @click='dele(i.id,$event)'>X</button>
				</div>
			</div>
		</div>
		
	</div>


</template>


<script>

	export default{
			data(){
				return{
					arr:[],
					uid:0
				}
			},
			methods:{
				dele(id,b){
					this.$http.get('http://localhost:8000/dele?id='+id).then((e)=>{
						console.log('OK');
					});
					// console.log(s.currentTarget.parentNode.remove())
				},
				add(){
					this.uid=1;
				},
				btn(){
					this.$http.post('http://localhost:8000',{id:user.value,pass:pass.value},{emulateJSON:true}).then((e)=>{
						console.log('OK');
					});
					this.uid=0;
				}
			},
			created(){
			this.$http.get('http://localhost:8000').then((e)=>{
				this.arr = e.body
			})
		}
	}


</script>
<style>
	.box{
		width: 400px;
		height: auto;
		background-color: #ccc;
		padding-bottom: 20px;
		overflow:hidden;
    }
    .tian{
		float: left;
	}
	.btn{
        float: left;
        margin-top: 10px;
		margin-left: 150px;
	}
	.rows{
		width: 100%;
		height: 30px;
		overflow: hidden;
	}
	span{
		float: left;
		margin-right: 30px;
    }
    #user,#pass{
         margin-top: 10px;
    }
	button{
		float:right;
		margin-top: 5px;
	}
	
</style>