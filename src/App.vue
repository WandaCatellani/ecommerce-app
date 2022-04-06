<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/cart">Cart</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>

  <router-view></router-view>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
