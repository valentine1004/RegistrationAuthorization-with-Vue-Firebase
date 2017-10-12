<template>
  <div id="app">
    <div class="container">
   <app-navbar></app-navbar>
   <router-view></router-view>
   <!-- <div class="logo"><img src="src/assets/logo.png" height="241" width="577"></div> -->
  </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  
    components:{
      appNavbar: Navbar
    }
  }

</script>

<style>
  .logo{
    margin-top:30px;
  }
</style>
