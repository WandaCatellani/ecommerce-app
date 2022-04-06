<template>
  <div>
    <h1>Products</h1>

    <div v-for="product in products" :key="product.id">
      <h2>{{ product.id }} - {{ product.category }}</h2>
      <p>{{ product.title }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.image" alt="" />
      <p>$ {{ product.price }}</p>
    </div>

    <!-- <h2>{{ $store.state.numero }}</h2> -->
    <h2>{{ numero }}</h2>

    <!-- <button @click="$store.commit('AddProduct')">+</button> -->
    <button @click="AddProduct">+</button>

    <br />
    <br />

    <!-- <button @click="decrementar">-</button> -->

    <br />
    <br />

    <ul v-for="product in products" :key="product.name">
      <li>{{ product.name }}</li>
    </ul>

    <button @click="fetchProducts">Lista de productos</button>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "ProductsView",
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapMutations(["ADD_PRODUCT_TO_CART"]),
    ...mapActions(["fetchProducts", "addProductToCart"]),
  },
  // async created() {
  //   let url = "https://fakestoreapi.com/products";

  //   await axios
  //     .get(url)
  //     .then((response) => (this.products = response.data))
  //     .then((response) => console.log(response));
  // },

  // created() {
  //   axios.get("/api/services").then(response => {
  //     this.users = response.data;
  //   });
  // }
  // };
};
</script>

<style></style>
