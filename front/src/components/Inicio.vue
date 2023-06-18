<template>
  <div class="container-fluid">
    <div class="inicio">
      <img src="..\assets\logo_respirar.png" style="width: 600px; max-width: 100%; mix-blend-mode: color-burn;"><br><br>
      <h1>Open IoT environmental platform</h1><hr>
      <p>
        Bienvenido a nuestra plataforma de Internet de las cosas (IoT) para el monitoreo ambiental.
        Aquí podrás encontrar una lista de estaciones disponibles y acceder a información en tiempo real.
        Al seleccionar una estación, se mostrará la información actualizada de dicha estación.
        Además, podrás explorar el historial de datos y exportarlo en formato .csv para su análisis.

        Nuestro objetivo es brindarte una visión detallada del entorno y la calidad del aire que te rodea.
        Con esta información, podrás tomar decisiones informadas para proteger tu salud y el medio ambiente.
        Estamos comprometidos con proporcionar una experiencia intuitiva y fácil de usar en nuestra plataforma.
        
        ¡Así que comencemos! Haz clic en el botón "INICIAR" a continuación para explorar las estaciones.
      </p>
      <br>
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

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ajusta la altura según tus necesidades */
}

.inicio {
  color: white;
  text-align: center;
}

.button {
  color: white;
}
</style>
