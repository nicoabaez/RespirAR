<template>
  <div>
    <Navbar class="navbar" />
    <router-view />
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
}

/* NUEVO: */
h1 {
  color: rgb(125, 116, 240);
}
</style>
