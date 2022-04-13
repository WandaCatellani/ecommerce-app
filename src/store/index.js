import { createStore } from 'vuex';

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
