<template>
	<div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Registration</h1>
        <form>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Password (Latin letters and Cyrillic characters)</label>
          <input class="form-control" type="password" v-model="user.password" pattern="^[а-яА-ЯёЁa-zA-Z]+$">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </form>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        user:{
          username:'',
          password:''
        },
        users:[]
      }
    },
    methods:{
      submit(){
        this.$http.post('https://tzi-vue.firebaseio.com/data', this.user).then(function(response){
          this.users = response.data;
        },function(error){
          console.log(error);
        })
      },
      fetchData(){
        this.$http.get('https://tzi-vue.firebaseio.com/data.json').then(function(response){
            return response.json();
        }) .then(function(data){
            const resultArr = [];
            for(let key in data){
              resultArr.push(data[key]);
            }
            this.users = resultArr;
        })
      }
    }
  }
</script>

<style>

</style>