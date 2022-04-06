<template>
  <div class="container">
    <form ref="userForm" @submit="onSubmit">
      <div>
        <v-row justify="space-around">
          <v-col>
            <template>
              <v-card>
                <v-toolbar color="orange darken-3" dark
                  >Agregar Producto</v-toolbar
                >
                <v-card-text>
                  <v-form ref="form" lazy-validation>
                    <v-text-field
                      v-model="name"
                      :counter="20"
                      label="Name"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="price"
                      label="Price"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="description"
                      label="Description"
                      required
                    ></v-text-field>

                    <v-text-field
                      v-model="image"
                      label="Url Image"
                      required
                    ></v-text-field>
                  </v-form>
                </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn type="submit" color="warning" dark>
                    {{ buttonLabel }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-col>
        </v-row>
      </div>
    </form>
  </div>
</template>

<script>
// import { isObjectEmpty } from "../utils/operations";

export default {
  data: function () {
    return {
      name: '',
      description: '',
      image: '',
      price: 0,
      id: '',
      buttonLabel: 'Agregar Producto',
    };
  },
  props: {
    productToEdit: Object,
  },
  watch: {
    productToEdit: function () {
      if (!isObjectEmpty(this.productToEdit)) {
        this.name = this.productToEdit.name;
        this.description = this.productToEdit.description;
        this.image = this.productToEdit.image;
        this.price = this.productToEdit.price;
        this.id = this.productToEdit.id;
      }
      this.buttonLabel = 'Editar';
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newProduct = {
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price,
      };
      this.id !== ''
        ? this.$emit('editTheProduct', { ...newProduct, id: this.id })
        : this.$emit('newProduct', newProduct);
      this.cleanForm();
    },
    cleanForm() {
      this.name = '';
      this.description = '';
      this.image = '';
      this.price = 0;
      this.id = '';
      this.buttonLabel = 'Agregar Producto';
    },
  },
};
</script>
