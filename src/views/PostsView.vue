<template>
  <div>
    <h1>Posts</h1>

    <!-- <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }} - {{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div> -->

    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.id }} - {{ post.name }}</h2>
      <p>{{ post.job }} - {{ post.age }}</p>
      <p>{{ post.email }}</p>
      <!-- <img :src="post.avatar" alt="" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsView",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    let url = "https://62435d9539aae3e3b7422c44.mockapi.io/api/v1/users";

    // Fetch nos permite pasar como parametro la url de la api a consumir / Agregar un segundo parametro, pero si no lo agregamos automaticamente crea una peticion GET

    fetch(url)
      .then((response) => response.json())
      // Para guardar la respuesta en el objeto posts tengo que concatenar otra promesa que me guarde la data obtenida
      .then((data) => (this.posts = data));

    // async created() {
    //     let url = 'https://jsonplaceholder.typicode.com/posts';
    //     const response = await fetch(url);
    //     const postData = await response.json();
    //     this.posts = postData;
    // }

    // let text = { paragraph: 'Feliz cumple Niki'};
    // let post = {
    //     method: 'POST',
    //     body: JSON.stringify(text),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    // }
  },
};
</script>

<style></style>
