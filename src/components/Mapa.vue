<template lang="html">

  <section class="src-componentes-mapa">
    <h1>src-componentes-mapa Component</h1>
      <div class="jumbotron">
        <div class="container-fluid contenedorGeneral">

        </div>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-mapa',
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
    /*background: linear-gradient(to bottom right, red 0%,green 40%,blue 90%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background: #283456;
    color: white;
  }

  .contenedorGeneral{
    background:#202a46;
    background-attachment: fixed;
    border-radius: 20px;
    padding: 10px;
    border-style: solid;
    border-color: #1a2238;
  }
</style>
