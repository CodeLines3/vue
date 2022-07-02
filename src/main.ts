import { createApp } from 'vue'
import 'normalize.css/normalize.css';
import 'amfe-flexible';
import App from './App.vue'
import { setupRouter } from '@/router/index';
// Plugins
import { setupEcharts } from '@/plugins';
const app = createApp(App);

setupEcharts(app);
setupRouter(app);

app.mount('#app');
