import './assets/css/main.scss'
import 'remixicon/fonts/remixicon.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { useThemeStore } from './store/modules/theme'
import './libs/initEditorConfig'
const app = createApp(App)
// 关闭 Vue 警告日志
app.config.warnHandler = () => {}
// 关闭 Vue 警告日志
app.config.warnHandler = () => {}

setupStore(app)
const store = useThemeStore()
store.onInitThemeColorr()
app.mount('#app')
