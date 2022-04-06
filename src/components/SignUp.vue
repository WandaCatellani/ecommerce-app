<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <img :src="img" :alt="'banner sign up'" class="img" />
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form v-on:submit.prevent="register">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="name"
                label="Name"
                id="name"
                v-model="name"
                type="name"
                required
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="lastName"
                label="Last Name"
                id="lastName"
                v-model="lastName"
                type="lastName"
                required
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                v-model="email"
                type="email"
                required
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-select
                id="rol"
                v-model="rol"
                class="custom-select"
                label="Elegir un rol"
                :items="items"
              />
            </v-flex>

            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                required
              ></v-text-field>
            </v-flex>

            <v-flex>
              <v-text-field
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                required
              ></v-text-field>
            </v-flex>

            <v-flex class="text-xs-center" mt-5>
              <v-btn outlined color="orange darken-3" type="submit"
                >Sign Up</v-btn
              >
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import signUp from "../../assets/signUp.png";
const axios = require("axios");

export default {
  data: () => ({
    items: ["Admin", "User"],
    function() {
      return {
        img: signUp,
      };
    },
    img: signUp,
  }),

  methods: {
    register() {
      axios
        .post("https://61b92f2138f69a0017ce5eef.mockapi.io/users", {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          rol: this.rol,
        })
        .then(() => this.$router.push("/"));
    },
  },
};
</script>

<style scoped>
.img {
  display: block;
  margin: auto;
}
</style>
