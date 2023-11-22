// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/public/css/global.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    ["@nuxtjs/i18n", {}],
    '@formkit/auto-animate/nuxt',
    "@nuxt/image",
    ["@nuxtjs/color-mode", {
      classSuffix: '',
      preference: 'system',
      fallback: 'light',
    }],
    ["nuxt-mongoose", {
      uri: process.env.NUXT_PUBLIC_MONGODB_URI,
      options: {},
      modelsDir: 'models',
      devtools: true,
    }],
    ["nuxt-auth-utils", {
      
    }],
    ["@vite-pwa/nuxt", {
      manifest:{
        name: "Nuxt 3 Template",
        short_name: "Nuxt 3 Template",
        description: "Nuxt 3 Template",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ]
      }
    }],
    ["@nuxtjs/device",{
      refreshOnResize: true
    }],
    "dayjs-nuxt"
  ]
})