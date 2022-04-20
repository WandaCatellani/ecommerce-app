import App from './App.vue';
import { createApp } from 'vue';
import router from './router/router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');

// import { createPinia } from 'pinia';
// createApp(App).use(router).use(createPinia()).mount('#app');
