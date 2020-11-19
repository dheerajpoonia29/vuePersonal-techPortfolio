import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons, LayoutPlugin } from 'bootstrap-vue'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(LayoutPlugin)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");