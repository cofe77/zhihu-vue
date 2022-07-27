import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Router from './router/Router'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'uno.css'
moment.locale('zh-cn')

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
app.config.globalProperties.$moment = moment
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(Router).use(pinia).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app')
