<!-- <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="http://www.calidadmedioambiental.org/static/media/logo_respira_intro.65fc3a98.png" alt="" width="100" class="d-inline-block align-top">
      </a>
      <button class="navbar-toggler" type="button" @click="isExpanded = !isExpanded">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': isExpanded }">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mapa" class="nav-link">Mapa</router-link>
          </li>
          <li class="nav-item">
            <a href="http://localhost:3000/" class="nav-link">Hola Mundo</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'src-componentes-navbar',
  data() {
    return {
      isExpanded: false,
      showDropdown: false
    };
  },
  methods: {}
};
</script> -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="http://www.calidadmedioambiental.org/static/media/logo_respira_intro.65fc3a98.png" alt="" width="100" class="d-inline-block align-top"></a>
      <button class="navbar-toggler" type="button" @click="isExpanded = !isExpanded">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': isExpanded }">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mapa" class="nav-link">Mapa</router-link>
          </li>
          <li class="nav-item">
            <a href="http://localhost:3000/" class="nav-link">Hola Mundo</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
          <button class="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'src-componentes-navbar',
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {}
};
</script>

<style>
.navbar {
  transition: background-color 0.3s ease;
}

.navbar-nav .nav-link {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.form-control {
  border-radius: 0.25rem;
}

.btn-outline-light {
  border-radius: 0.25rem;
}
</style>
