<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="..\assets\logo_respirar.png" width="100" class="d-inline-block align-top"></a>
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
        </ul>
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

#navbar {
  transition: background-color 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  height: 70px;
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
