<template>
  <section class="mt-5">
    <h1>Form</h1>

    <form action="">
      <b-row>
        <b-col md="6">
          <b-form-input
            type="text"
            v-model="texto"
            :state="comprobar"
          ></b-form-input>

          <small>Máximo 15 caracteres</small>
        </b-col>

        <b-col md="6">
          <b-form-select v-model="select" :options="productos"></b-form-select>

          <p>Seleccionaste: {{ select }}</p>
        </b-col>

        <b-col md="6">
          <b-form-checkbox
            v-model="checkbox"
            :options="productos"
          ></b-form-checkbox>

          <p>Seleccionaste: {{ checkbox }}</p>
        </b-col>
      </b-row>
    </form>

    <p>{{ texto }}</p>
  </section>
</template>

<script>
export default {
  name: 'MyForm',
  data() {
    return {
      texto: '',
      select: 'null',
      productos: [
        { text: 'Selecciona un producto', value: 'null' },
        { text: 'Selecciona un producto', value: 'Hamburguesa' },
        { text: 'Selecciona un producto', value: 'Lomito' },
        { text: 'Selecciona un producto', value: 'Pizza' },
      ],
      checkbox: [],
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 15 ? 'error' : '';
    },
  },
};
</script>
