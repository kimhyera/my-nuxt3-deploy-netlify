
module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: './node_modules/nuxt/bin/nuxt.js', // Nuxt 실행 스크립트의 경로
      args: 'start', // Nuxt 애플리케이션을 시작하는 명령어
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        DATABASE_URL: "localhost:5179"
      },
    },
  ],
};
