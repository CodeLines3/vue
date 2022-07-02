import { createApp } from 'vue'
import 'normalize.css/normalize.css';
import 'nprogress/nprogress.css' // progress bar style
import 'amfe-flexible';
import App from './App.vue'
import { setupRouter } from '@/router/index';
// Plugins
import { setupElementIcon } from '@/plugins/ElementPlus';
import { setupEcharts } from './plugins/VueEcharts';
const app = createApp(App);

setupEcharts(app);
setupRouter(app);
setupElementIcon(app);

app.mount('#app');
