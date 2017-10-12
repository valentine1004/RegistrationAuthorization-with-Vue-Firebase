<template>
	<div class="row">
		<div class="col-md-6 col-md-offset-3">
			<div class="panel-body" v-if="form">
				<div class="form-group">
					<input v-model="user.username" class="form-control" type="text" placeholder="Name" value="ADMIN">
				</div>
				<div class="form-group">
					<input v-model="user.password" class="form-control" type="password" placeholder="Password">
				</div>
				<button class="btn btn-success pull-right" @click="submit">Login</button>
			</div>
			<div v-if="content">
				<h1>Hello, ADMIN</h1>
				<button class="btn btn-success pull-right" @click="fetchData">переглянути список користувачів</button>
				<br>
				<br>
				<ul class="list-group" v-if="show_users">
					<li class="list-group-item" v-for="us in users">{{us.username}} <input type="checkbox"></li>
				</ul>
				<br>
				<button class="btn btn-success pull-right" @click="password_change">змінити пароль</button>
				<br>
				
				<div class="form-group" v-if="changeP">
					<p>Old password</p>
					<input v-model="user.oldPassword" class="form-control" type="password" placeholder="Password">
					<br>
					<button class="btn" @click="checkOldPass">Submit</button>
					<br>
					<div v-if="oldPassTrue">
						<p>New password</p>
						<input v-model="user.newPassword" class="form-control" type="password" placeholder="Password">
						<br>
						<button class="btn" @click="setNewPassword">Change</button>
						<br>
					</div>
				</div>
				<br>
				<button class="btn btn-success">додавання унікального імені користувача</button>
				<br>
				<br>
				<button class="btn btn-success">блокування роботи користувача</button>
				<br>
				<br>
				<button class="btn btn-primary" @click="exit">Exit</button>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			user:{
				username:'ADMIN',
				password:'',
				oldPassword: '',
				newPassword:''
			},
			users:[],
			content:false,
			form:true,
			show_users:false,
			changeP:false,
			oldPassTrue:false
		}
	},
	methods:{
		submit(){
			this.$http.get('https://tzi-vue.firebaseio.com/data.json').then(function(response){
				return response.json();
			}) .then(function(data){
				const resultArr = [];
				for(let key in data){
					resultArr.push(data[key]);
				}
				this.users = resultArr;
				for(var i = 0; i < this.users.length; i++){
					if(this.users[i].password==this.user.password && this.user.username == 'ADMIN'){
						this.content = true;
						this.form = false;
						break;
					}
				}

			})
		},
		fetchData(){
			this.show_users = true;
			this.$http.get('https://tzi-vue.firebaseio.com/data.json').then(function(response){
				return response.json();
			}) .then(function(data){
				const resultArr = [];
				for(let key in data){
					resultArr.push(data[key]);
				}
				this.users = resultArr;
			})
		},
		exit(){
			this.content = false;
			this.form = true;
		},
		password_change(){
			this.changeP = true;
		},
		checkOldPass(){
			if(this.user.oldPassword == this.user.password){
				this.oldPassTrue = true;
			}else{
				alert("Неверный пароль");
			}

		},
		setNewPassword(){
			alert("Пароль изменен");
			this.user.password = this.user.newPassword;
			this.$http.post('https://tzi-vue.firebaseio.com/data', this.user).then(function(response){
				// this.user = response.data;
			},function(error){
				console.log(error);
			})
		}
	}
}

</script>

<style>

</style>