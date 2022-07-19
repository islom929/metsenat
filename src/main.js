import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'
import svgIcon from './components/icons/svgIcon'
import './assets/tailwind.css'

const app = createApp(App)
app.component('svg-icon', svgIcon)
app.use(store).use(router).use(Maska).mount('#app')
