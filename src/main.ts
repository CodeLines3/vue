import { createApp } from 'vue'
import 'normalize.css/normalize.css';
import 'amfe-flexible';
import App from './App.vue'
import router from '@/router/index';
// Plugins
import Echarts from '@/plugins/vCharts';
const app = createApp(App);
app.use(Echarts)
.use(router)
.mount('#app');
