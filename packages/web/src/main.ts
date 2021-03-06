// register vue composition api globally
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(createPinia);
app.mount('#app');
