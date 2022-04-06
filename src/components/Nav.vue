<template>
  <v-toolbar app color="teal" dark max-height="65">
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">
        <img :src="logo" :alt="'Logo'" class="img-logo" />
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        color="transparent"
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path"
      >
        <v-icon left light>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-btn
        v-if="name === undefined"
        color="transparent"
        :key="Login"
        :to="'/signin'"
      >
        <v-icon left light> mdi-account-lock-open</v-icon>
        Login
      </v-btn>

      <v-btn
        v-else-if="name !== undefined"
        color="transparent"
        @click="logout()"
      >
        <v-icon left light> mdi-account-lock-open</v-icon>
        Log out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  data() {
    return {
      logo: logo,
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "mdi-home" },
        { title: "Cart", path: "/cart", icon: "mdi-cart" },
      ],
      name: undefined,
    };
  },

  computed: {
    getName() {
      return this.$store.state.user.name;
    },
  },
  watch: {
    getName(newValue) {
      this.name = newValue;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("cleanUser", {});
    },
  },
};
</script>

<style scoped>
.img-logo {
  height: 5vh;
}
</style>
