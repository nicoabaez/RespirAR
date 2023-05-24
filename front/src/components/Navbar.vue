<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- Icono de NAVBAR -->
    <nav class="navbar navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-top">        
        </a>
    </div>
    </nav>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">      
           <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">                
           <router-link to="/mapa" class="nav-link">Mapa</router-link>
        </li>
        <li class="nav-item">          
          <a href="http://127.0.0.1:3000/hello" class="nav-link">HelloWorld</a>           
        </li>

              
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>

      <div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">

            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person-circle iconoUsuario" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
            </a>

            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li>
                <div class="container">
                  <h4>¡BIENVENIDO, INVITADO!</h4>
                  <p>Usted ha ingresado al sitio como invitado, pruebe alguna de estas opciones:</p>
                  <button class="btn btn-primary" onclick="alert('Esta función será implementada en una entrega futura.')"> REGISTRARME </button>
                  <button class="btn btn-primary" onclick="alert('Esta función será implementada en una entrega futura.')"> INICIAR SESIÓN </button>
                </div>
              </li>
            </ul>
            
          </li>
        </ul>
      </div>

    </div>
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
