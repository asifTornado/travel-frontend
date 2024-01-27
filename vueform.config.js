// vueform.config.(js|ts)

import en from '@vueform/vueform/locales/en'
import material from '@vueform/vueform/themes/material'
import { defineConfig } from '@vueform/vueform'

// You might place these anywhere else in your project
import '@vueform/vueform/themes/material/css/index.min.css';

export default defineConfig({
  theme: material,
  locales: { en },
  locale: 'en',

  endpoints: {
    upload_attachment: {
      url: '/upload-attachment',
      method: 'post'
    }
  }
})