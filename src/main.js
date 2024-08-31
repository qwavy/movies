import { createApp } from 'vue'
import App from './App.vue'
import "./assets/index.css";

import  router  from './router/router.js'

import {createPinia} from "pinia";

createApp(App).use(createPinia()).use(router).mount('#app')
