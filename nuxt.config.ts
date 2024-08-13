import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
    vscode: {
      reuseExistingServer: true
    }
  },

  app: {
    head: {
      title:
        'Gấu Bông Mia: Xưởng Sản Xuất Gấu Bông Giá Sỉ Uy Tín - giá rẻ - uy tín số 1 Hồ Chí Minh',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://gaubongmia.com/favicon.ico'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap'
        }
      ],
      htmlAttrs: {
        lang: 'vi'
      },

      script: [
        {
          src: ''
        }
      ]
    }
  },

  ssr: true,

  typescript: {
    strict: true,
    shim: false
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: false
    },
    routeRules: {},
    publicAssets: [
      {
        baseURL: 'public',
        dir: 'public',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      },
      {
        baseURL: 'images',
        dir: 'public/images',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      },
      {
        baseURL: 'fonts',
        dir: 'public/fonts',
        maxAge: 60 * 60 * 24 * 30 // 30 days
      }
    ],
    minify: true
  },

  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt',
    'nuxt-gtag',
    'nuxt-delay-hydration',
    '@nuxtjs/critters',
    '@nuxtjs/web-vitals',
    '@nuxt/devtools',
    '@element-plus/nuxt',
    '@nuxtjs/i18n'
  ],

  gtag: {
    id: 'G-CET8DX0SFP'
  },

  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false
  },

  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      preload: 'swap'
    }
  },

  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    mode: 'init',
    replayClick: true,
    include: ['/']
  },

  vueuse: {
    ssrHandlers: true
  },

  build: {
    transpile: []
  },

  compatibilityDate: '2024-07-28'
})
