// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
// import { BootstrapVue } from 'bootstrap-vue';
import { createApp } from 'vue';
import router from './router/router';
import store from './store';

createApp(App).use(router).use(store).mount('#app');
// createApp(App).use(BootstrapVue).use(router).use(store).mount('#app');

// import { createPinia } from 'pinia';
// createApp(App).use(router).use(createPinia()).mount('#app');
