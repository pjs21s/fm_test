

import { createApp } from 'vue'
// import vuetify from 'vuetify'
import App from './App.vue'
import store from './store'

let app = createApp(App).use(store)
// app.use(vuetify) // use Vuetify
app.mount('#app')
