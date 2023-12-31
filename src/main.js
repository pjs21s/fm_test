

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
  components,
  directives,
})

let app = createApp(App).use(store)
app.use(vuetify)
app.use(router)
app.mount('#app')
