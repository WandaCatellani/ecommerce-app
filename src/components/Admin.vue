<template>
  <section class="home">
    <v-card class="mx-auto">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="product in products" :key="product.id" :cols="flex">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img :src="product.image" height="250" />

              <v-card-title>{{ product.name }}</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ {{ product.price }}</div>

                <div>{{ product.description }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="red" text @click="deleteProduct(product)">
                  Eliminar
                </v-btn>
                <v-btn>
                  <v-icon
                    color="orange darken-3"
                    text
                    @click="editProduct(product)"
                  >
                    mdi-lead-pencil
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "homeAdmin",
  props: {
    products: Array,
  },
  data: () => ({
    flex: 4,
  }),

  methods: {
    deleteProduct(id) {
      this.$emit("deleteProduct", id);
    },
    editProduct(product) {
      this.$emit("editProduct", product);
    },
  },
};
</script>
