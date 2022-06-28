import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Router from './router/Router'
import store from './store/store'

createApp(App).use(Router).use(store).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
