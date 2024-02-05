module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
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