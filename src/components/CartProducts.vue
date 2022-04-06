<template>
  <section class="cart">
    <v-container fluid>
      <v-row>
        <v-col class="offset-md-2 col-md-8">
          <v-simple-table class="table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Producto</th>
                  <th class="text-right">Precio unitario</th>
                  <th class="text-left">Cantidad</th>
                  <th class="text-right">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="item in cart.products" :key="item.id">
                  <td class="text-left">{{ item.name }}</td>
                  <td class="text-right">{{ item.price }}</td>
                  <td class="text-left">{{ item.quantity }}</td>
                  <td class="text-right">{{ item.quantity * item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>

      <v-row justify="space-around" class="m-4">
        <v-col class="offset-md-8 col-md-2">
          <strong>Total: $ {{ total }}</strong>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="offset-md-6 col-md-2">
          <v-btn outlined color="orange darken-3" type="submit" to="/"
            >Seguir Comprando</v-btn
          >
        </v-col>

        <template>
          <v-col class="col-md-2">
            <v-dialog v-model="dialog" persistent>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="success"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="generateOrderId()"
                >
                  Pagar
                </v-btn>
              </template>
              <v-card>
                <v-card-text class="text"> Gracias por su compra! </v-card-text>
                <v-card-text class="text"
                  >Su N° Orden de Compra es: {{ orderId }}</v-card-text
                >
                <v-card-text class="text"
                  >Dirigite a un Rapipago o Pago facil con tu numero de Orden,
                  abonas, y listo!!</v-card-text
                >
                <v-card-text class="text"
                  >Disfrutas de tu voucher cuando quieras!!</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="finishOrder()">
                    OK
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      orderId: null,
    };
  },
  computed: {
    total() {
      let total = 0;
      this.cart?.products?.forEach((item) => {
        item.quantity = item.quantity || 1;
        total += (item.quantity || 1) * item.price;
      });

      return total;
    },
    cart() {
      return this.$store.state.cart;
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {},
  methods: {
    generateOrderId() {
      this.orderId = Date.now();
    },
    finishOrder() {
      this.dialog = false;
      this.orderId = null;
      this.$store.dispatch("cleanCart", []);
    },
  },
};
</script>

<style scoped>
.text {
  font-weight: bold;
  font-size: larger;
  text-align: center;
}
.table {
  font-weight: bold;
}
</style>
