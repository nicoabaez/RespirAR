<template>

  <nav class="navbar navbar-expand-true navbar-dark bg-dark">
    
    <router-link to="/">
      <a class="navbar-brand" @click="refrescarVista()">Inicio</a>
    </router-link>
    
    <div class="dropdown">
      <button class="navbar-toggler desplegableUsuario" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person-circle iconoUsuario" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </button>

      <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
        <div class="container">
          <h4>¡BIENVENIDO, INVITADO!</h4>
          <p>Usted ha ingresado al sitio como invitado, pruebe alguna de estas opciones:</p>
          <button class="btn btn-primary" onclick="alert('Esta función será implementada en una entrega futura.')"> REGISTRARME </button>
          <button class="btn btn-primary" onclick="alert('Esta función será implementada en una entrega futura.')"> INICIAR SESIÓN </button>
        </div>
      </div>
      
    </div>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <!-- <li class="nav-item">
          <router-link to="/ruta">
            <a class="nav-link" href="#">Componente</a>
          </router-link>
        </li>-->

      </ul>
    </div>
  </nav>

</template>

<style scoped lang="css">
  
  .navbar{
    padding: 0.5rem 2rem;
  }

 .iconoUsuario{
   width: 40px;
   height: 40px;
   fill: currentColor;
  }
  .dropdown-menu{
    left: -127px;
    border-color: #4f4f4f;
    border-style: solid;
  }
  .container{
    text-align: center;
    color: white;
  }
  .container button{
    width: 100%;
    margin: 2px;
  }

</style>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
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
