<template>
  <div class="fondo">
    <Navbar class="navbar" />
    <router-view></router-view>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* NUEVO: */
.fondo{
  margin-left: 10rem;
  margin-right: 10rem;
}
.navbar{
  padding: 0.5rem 2rem;
  margin-top: 3rem;
}

h1 {
  color: rgb(125, 116, 240);
}
</style>
