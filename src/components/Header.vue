<template>
  <div v-if="users ? true : false" class=""></div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "headerComponent",
  props: {},
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["UPDATE_USER"]),
  },
};
</script>

<style scoped></style>
