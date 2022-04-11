<template>
  <section class="container">
    <h1>Home</h1>
    <FilterByCategory />
    <ListProducts />
  </section>
</template>

<script>
import FilterByCategory from '../components/FilterByCategory.vue';
import ListProducts from '../components/ListProducts.vue';

export default {
  components: {
    ListProducts,
    FilterByCategory,
  },
};
</script>
