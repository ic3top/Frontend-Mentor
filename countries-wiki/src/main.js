import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import store from './store';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App).use(PrimeVue, {
  ripple: true,
  inputStyle: 'filled',
}).use(store).mount('#app');
