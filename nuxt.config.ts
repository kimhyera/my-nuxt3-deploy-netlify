// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from  'path'
export default defineNuxtConfig({
  alias:{
    // '@': resolve(__dirname, '/'),
    assets:"/<rootDir>/assets"
  },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/content'
  ],
})
