// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  nitro: {
    firebase: {
      gen: 2
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
    '@formkit/auto-animate/nuxt',
    ["@vite-pwa/nuxt", {
      manifest:{
        name: "GlacierGuide",
        short_name: "GlacierGuide",
        description: "Приложение сайта GlacierGuide",
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