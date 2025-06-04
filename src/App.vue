<script setup>
import HomeComponent from './views/HomeComponent.vue'
</script>

<template>
  <!-- <HomeComponent/> -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/home" class="nav-link">Home</router-link>
         <router-link to="/signup" class="nav-link">signup</router-link>
        <!-- <router-link to="about" class="nav-link">About</router-link> -->
        <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
        
      </ul>
    </div>
  </div>
</nav>
  <router-view></router-view>
</template>

<style scoped>

</style>
