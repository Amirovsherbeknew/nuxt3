// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  components: [{ path: '~/components', pathPrefix: false, extensions: ['vue'] }],
  modules: ["@ant-design-vue/nuxt"]
})