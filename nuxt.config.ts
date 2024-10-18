// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      title: "ErrorDriven",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  image: {
    dir: "assets/images",
  },
});
