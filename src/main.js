import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import './assets/font-awesome-6-pro-main/css/all.css'


const app = createApp(App)
app.use(router)
app.use(AOS)
app.mount('#app')
