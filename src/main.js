// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
// import { BootstrapVue } from 'bootstrap-vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

//.use(BootstrapVue)
createApp(App).use(router).use(createPinia()).mount('#app');
