import Vue from 'vue'
import './plugins/vuetify'
import store from './store'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
//import '@mdi/font/css/materialdesignicons.css'
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
