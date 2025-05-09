import './assets/css/main.scss'
import 'remixicon/fonts/remixicon.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import { useAppStore } from './store/modules/app'
import './libs/initEditorConfig'
const store = useAppStore()
const app = createApp(App)
setupStore(app)
store.onInitThemeColorr()
app.mount('#app')
declare global {
  interface Window {
    umami: {
      track: (eventName?: string, data?: Record<string, any>) => void
    }
  }
}
if (!window.umami)
  window.umami = {
    track: () => {},
  }
window.addEventListener('vite:preloadError', () => {
  window.location.reload()
})
