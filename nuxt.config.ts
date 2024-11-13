// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/tik-grabber-web/',
    buildAssetsDir: '/static/',
  },
  dir: {
    pages: 'pages',
  },
  ssr: false, // Github pages require
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-svgo'], // 注意这里使用 'nuxt-svgo'
  svgo: {
    // svgo options here - see below
    defaultImport: 'component' // if you want to import as Vue components by default
  }
})
