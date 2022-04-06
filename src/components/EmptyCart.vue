<template>
  <div class="emptyCart" style="textalign: center">
    <img :src="img" :alt="'logo'" class="empty-cart" />
    <h2>¡No armaste tu pedido aún!</h2>
  </div>
</template>

<script>
import emptyCart from "../assets/img/empty-cart.png";

export default {
  data: function () {
    return {
      img: emptyCart,
    };
  },
};
</script>

<style scoped>
.cartEmpty {
  margin-top: 5rem;
}

.empty-cart {
  width: 20%;
  color: red;
}
</style>
