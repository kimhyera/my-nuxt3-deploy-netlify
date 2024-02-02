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
ssr: false,

  // 서버 사이드 렌더링을 사용하도록 설정
build: {
  extractCSS: true, // CSS를 별도의 파일로 추출
},
  
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
