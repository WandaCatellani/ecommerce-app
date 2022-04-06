<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <Nav />
  <b-container>
    <router-view />
  </b-container>

  <router-link to="/">Home</router-link> |
  <router-link to="/login">Login</router-link> |
  <router-link to="/cart">Cart</router-link> |
  <router-link to="/admin">Admin</router-link>

  <!-- <v-app>
    <Nav />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
