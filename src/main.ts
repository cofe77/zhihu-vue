import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Router from './router/Router'
import store from './store/store'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
moment.locale('zh-cn')

const app = createApp(App)
app.config.globalProperties.$moment = moment
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(Router).use(store).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
