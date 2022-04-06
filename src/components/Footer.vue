<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <router-link to="/" tag="span" style="cursor: pointer">
          <img :src="logo" :alt="'Logo'" class="img-logo" height="100" />
        </router-link>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px"> {{ icon }} </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Wanda Catellani</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  name: "FooterComp",
  data: () => ({
    logo: logo,
    icons: ["mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
