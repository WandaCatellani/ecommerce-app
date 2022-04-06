<template>
  <h1>Home - {{ userStore.userData }}</h1>
</template>

<script setup>
import { useUserStore } from '../store/users';

const userStore = useUserStore();
</script>

<style></style>
