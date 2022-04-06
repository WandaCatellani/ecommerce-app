<template>
  <b-img
    src="https://picsum.photos/1024/400/?image=41"
    fluid
    alt="Responsive image"
  ></b-img>

  <h1>Home - {{ userStore.userData }}</h1>

  <b-row class="mt-5" align-h="center">
    <b-col cols="12" md="4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        quam qui tempora officiis molestiae velit totam earum voluptate eveniet
        deserunt quibusdam aut voluptas amet doloribus cupiditate cum ex dolorum
        corrupti.
      </p>
    </b-col>

    <b-col cols="12" md="8">
      <b-img
        src="https://picsum.photos/1024/400/?image=41"
        fluid
        alt="Responsive image"
      ></b-img>
    </b-col>
  </b-row>

  <b-row class="mt-5" align-h="center">
    <b-col cols="12" md="8">
      <b-card
        title=""
        img-src=""
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="teal">Go somewhere</b-button>
      </b-card>
    </b-col>
  </b-row>
</template>

<script setup>
import { useUserStore } from '../store/users';

const userStore = useUserStore();
</script>

<style></style>
