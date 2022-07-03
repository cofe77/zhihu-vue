import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Router from './router/Router'
import store from './store/store'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
moment.locale('zh-cn')

const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(Router).use(store).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
