// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    head: {
      title: "NuxtMovie"
    }
  },
  runtimeConfig: {
    public: {
      keyMovie: process.env.API_KEY_MOVIE
    }
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
