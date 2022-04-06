<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <img :src="img" :alt="'banner sign in'" class="img" />
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form v-on:submit.prevent="login">
          <v-layout column>
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
              <v-select
                id="rol"
                v-model="rol"
                class="custom-select"
                label="Elegir un rol"
                :items="items"
              />
            </v-flex>

            <v-flex class="text-xs-center" mt-5>
              <v-btn outlined color="orange darken-3" type="submit"
                >Sign In</v-btn
              >
            </v-flex>
          </v-layout>
        </form>

        <v-btn class="ma-2" outlined color="indigo" to="/signUp">
          ¿No tenes cuenta? Crea una aquí!
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import signIn from "../../assets/signIn.png";
const axios = require("axios");

export default {
  data: () => ({
    items: ["Admin", "User"],
    function() {
      return {
        users: [],
        email: "",
        password: "",
        rol: "",
      };
    },
    img: signIn,
  }),

  methods: {
    findUser(listOfUsers) {
      return listOfUsers.find(
        (user) =>
          user.email === this.email &&
          this.password === user.password &&
          user.rol === this.rol
      );
    },
    login() {
      axios
        .get("https://61b92f2138f69a0017ce5eef.mockapi.io/users")
        .then((response) => {
          const user = this.findUser(response.data);
          if (user) {
            this.$store.dispatch("updateUser", user);

            this.$router.push(this.rol == "Admin" ? "/adminDashboard" : "/");
          } else {
            console.log("TODO: no se loguea");
          }
        });
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
