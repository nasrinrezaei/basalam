import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes } from './routes'
import('./assets/fonts/font.css');
import {store} from './store/store'

Vue.use(VueRouter);
const router =new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  el:'#app',
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
