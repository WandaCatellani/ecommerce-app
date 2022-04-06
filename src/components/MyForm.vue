<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation class="form">
      <h1>Contactanos</h1>

      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="15"
        label="Nombre"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-select
        v-model="select"
        v-for="product in products"
        :key="product.id"
        :items="products.name"
        :error-messages="selectErrors"
        label="Selecciona un producto"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      >
      </v-select>

      <!-- <option
        v-for="product in products"
        :value="product.id"
        :key="product.index"
      >
        {{ producto.nombre }}
      </option> -->

      <v-text-field
        v-model="bio"
        :counter="100"
        label="Mensaje"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="¿Estás de acuerdo?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit" color="success"> Enviar </v-btn>

      <v-btn @click="clear" color="error"> Limpiar </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "MyForm",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    products: [],
    checkbox: false,
  }),

  computed: {
    ...mapState(["products"]),
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    ...mapMutations(["PRODUCTS"]),
    ...mapActions(["fetchProducts"]),

    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
  async created() {
    let url = "https://fakestoreapi.com/products";

    await axios
      .get(url)
      .then((response) => (this.products = response.data))
      .then((response) => console.log(response));
  },
};
</script>

<style scoped>
form {
  background-color: hsl(280, 33%, 98%);
  margin: 5rem 0;
  padding: 2rem;
}

label,
select {
  color: #000;
}

h1 {
  color: #1a1a1a;
  padding: 0.5rem;
}
</style>
