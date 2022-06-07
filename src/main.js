import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueAxios from 'vue-axios'
import axios from 'axios'

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
