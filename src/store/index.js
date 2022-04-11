import { createStore } from 'vuex';

//  import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsFilter: [],
    cart: {
      products: [],
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },

    setProductsFilter(state, payload) {
      state.productsFilter = payload;
    },

    addProduct(state, payload) {
      const product = state.cart.products.find((p) => p.id == payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.cart.products.push(payload);
      }
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const response = await fetch(
          'https://62435d9539aae3e3b7422c44.mockapi.io/products'
        );

        const data = await response.json();

        commit('setProducts', data);
        commit('setProductsFilter', data);
      } catch (error) {
        console.log(error);
      }
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

    // Fetch nos permite pasar como parametro la url de la api a consumir / Agregar un segundo parametro, pero si no lo agregamos automaticamente crea una peticion GET
    // let url = "https://62435d9539aae3e3b7422c44.mockapi.io/api/v1/users";
    // fetch(url)
    // .then((response) => response.json())
    // Para guardar la respuesta en el objeto posts tengo que concatenar otra promesa que me guarde la data obtenida
    // .then((data) => (this.posts = data));

    // async created() {
    //     let url = 'https://jsonplaceholder.typicode.com/posts';
    //     const response = await fetch(url);
    //     const postData = await response.json();
    //     this.posts = postData;
    // }

    filterByStatus({ commit, state }, status) {
      const results = state.products.filter((product) => {
        return product.status.includes(status);
      });
      commit('setProductsFilter', results);
    },

    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const results = state.products.filter((product) => {
        const productName = product.name.toLowerCase();

        if (productName.includes(formatName)) {
          return product;
        }
      });

      commit('setProductsFilter', results);
    },

    addProductToCart(context, payload) {
      context.commit('addProduct', payload);
    },
  },
  modules: {},
});
