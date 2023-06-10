<template>
  <div>
    <Navbar />
    <router-view class="componentes"/>
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  body{
    background-color: #283456;
    background: url('http://www.calidadmedioambiental.org/static/media/background.e48737ad.png') no-repeat 50% fixed;
    background-size: cover;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
