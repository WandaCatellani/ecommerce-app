<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { Nav, Footer },
};
</script>

<template>
  <Nav />

  <section class="container">
    <router-view />
  </section>

  <Footer />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}

body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  width: 70%;
  margin: 0 auto;
}
</style>
