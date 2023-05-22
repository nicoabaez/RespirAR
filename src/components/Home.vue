<template>

  <section class=" src-components-inicio">
      <div>
        <div class="fondo">
        <h2>RespirAR</h2>
        <p>Dentro de esta sección podrás visualizar la lista de estaciones disponibles dentro de la página. Selecciona una estación, al clickearlo te mostrará la información de actual de dicha estación, y dentro de la misma podrás ver el histórico y exportar en .csv</p><hr>
        </div>
       
          <div class= "" >
          <!-- COLOCAR MAPA -->
            <Mapa/>
          </div>

        
      </div>
  </section>

</template>

<script lang="js">
  import Mapa from "./Map.vue"
  
  export default  {
    
    name: 'src-components-inicio',
    props: [],
    mounted () {

    },
    components: {
      Mapa,

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

  .fondo{
  margin-left: 10rem;
  margin-right: 10rem;
}

  .form-control{
    border: 1px solid #00623b;
    color: white;
  }

</style>
