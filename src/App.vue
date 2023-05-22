<template>
  <div class="fondo">
    <router-view></router-view>
    
  </div>
</template>

<script>
//import Navbar from './components/Navbar.vue'
//import Mapa from "./components/Map.vue"
export default {
  name: 'App',
  components: {
    //Navbar
    //Mapa
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

.navbar{
  padding: 0.5rem 2rem;
  margin-top: 3rem;
}

h1 {
  color: rgb(125, 116, 240);
}
</style>
