<template>

  <section class="src-components-inicio">
      <div class="jumbotron">
        <h2>RespirAR</h2>
        <p>Dentro de esta sección podrás visualizar la lista de estaciones disponibles dentro de la página. Selecciona una estación, al clickearlo te mostrará la información de actual de dicha estación, y dentro de la misma podrás ver el histórico y exportar en .csv</p><hr>
        
        <h1>src-components-inicio Component</h1>
        <div class="container-fluid">
          <!-- COLOCAR MAPA -->
        </div>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-inicio',
    props: [],
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

<style scoped lang="css">
  .jumbotron {
    background-color: #283456;
    color: white;
  }

  hr {
    background-color: #bbb;
  }

  .form-control{
    border: 1px solid #00623b;
    color: white;
  }

  .container-fluid{
    background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-attachment: fixed;
    border-radius: 20px;
    padding: 20px ;
  }
</style>
