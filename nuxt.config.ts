// https://nuxt.com/docs/api/configuration/nuxt-config

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
  target: 'static',
  
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  imports: {
    autoImport: true
    
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },


})
