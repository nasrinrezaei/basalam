import Vue from 'vue'
import App from './App.vue'

import('./assets/style.css');
import {store} from './store/store'


new Vue({
  el:'#app',
  store:store,
  render: h => h(App),
}).$mount('#app')
