module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '5179',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}