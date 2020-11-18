import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import Swiper,{Navigation,Pagination,Autoplay} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Swiper.use([Navigation,Pagination,Autoplay])
Vue.use(VueAwesomeSwiper)
import 'swiper/swiper-bundle.css'


import VueAxios from 'vue-axios'
import axios from './utils/axios/index'
Vue.use(VueAxios,axios)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
