import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import loader from "./components/Loader.vue"

// import Editor from 'vue-editor-js'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';


// Vuetify

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.min.css'




//

const pinia = createPinia()


pinia.use(piniaPluginPersistedstate);



const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light'
    }
  })

const app = createApp(App)

app.component('Loader', loader)

// app.use(Editor)
// app.use(Vueform, vueformConfig)
// app.use(VueApexCharts);
app.use(pinia)
app.use(vuetify)
app.use(router)
app.use(ToastPlugin)
app.mount("#app")
