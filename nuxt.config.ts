// https://nuxt.com/docs/api/configuration/nuxt-config
/* eslint-disable */
require('dotenv').config()

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiKey: process.env.AIRTABLE_API,
      baseId: process.env.BASE_ID,
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
