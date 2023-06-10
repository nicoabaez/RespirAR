<template>
  <div class="container-fluid">
    <div class="inicio">
      <img src="http://www.calidadmedioambiental.org/static/media/logo_respira_intro.65fc3a98.png" style="width: 30%;"><br><br>
      <h1>Open IoT environmental platform</h1><hr>
      <p>Dentro de esta sección podrás visualizar la lista de estaciones disponibles dentro de la página. Selecciona una estación, al clickearlo te mostrará la información de actual de dicha estación, y dentro de la misma podrás ver el histórico y exportar en .csv</p><br>
      <router-link to="/mapa" class="btn btn-success button">INICIAR</router-link>
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'src-components-inicio',
    props: [],
    components: {
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style>
.inicio {
  color: white;
}
.button{
  color: white;
}
</style>
