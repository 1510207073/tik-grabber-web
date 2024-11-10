// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/' // 替换为你的仓库名称, 如果是用户或组织站点，则使用 '/'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-svgo'], // 注意这里使用 'nuxt-svgo'
  svgo: {
    // svgo options here - see below
    defaultImport: 'component' // if you want to import as Vue components by default
  }
})