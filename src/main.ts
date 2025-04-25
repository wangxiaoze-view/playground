import './assets/css/main.scss'
import 'remixicon/fonts/remixicon.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { useThemeStore } from './store/modules/theme'

const app = createApp(App)
setupStore(app)
const store = useThemeStore()
store.onInitThemeColorr()
app.mount('#app')
