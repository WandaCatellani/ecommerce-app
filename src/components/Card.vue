<template>
  <div class="product">
    <img class="product__img" :src="product.image" :alt="product.name" />

    <div class="product__info">
      <h3>{{ product.name }}</h3>

      <div class="status">
        <span>{{ product.product }} - {{ product.deparment }}</span>
      </div>

      <div class="origin">
        <span>Descripcion: {{ product.description }} </span>
      </div>

      <div class="location">
        <span>Precio: $ {{ product.price }}</span>
      </div>

      <div class="btnCard">
        <button @click="addProductToCart(product)">Añadir al carrito</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  props: ['product'],
  setup() {
    const store = useStore();
    const products = computed(() => {
      return store.state.productsFilter;
    });
    onMounted(() => {
      store.dispatch('addProductToCart');
    });

    return { products };
  },
};
</script>

<style lang="scss">
.product {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.05);

    h3 {
      color: var(--text-orange);
    }
  }

  &__img {
    width: 100%;
  }

  span {
    color: var(--text-gray);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  &__info {
    padding: 1.5rem;

    .status {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .origen {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
