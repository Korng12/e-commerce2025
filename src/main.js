import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import count from './states'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia =createPinia()

// app.use(count)
app.use(router)
app.use(pinia)

app.mount('#app')
