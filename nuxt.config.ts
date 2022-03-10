import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: ['compute-scroll-into-view'],
    },
    buildModules: [
        /**
         * @see https://windicss.org en
         * @see https://cn.windicss.org cn
         */
        'nuxt-windicss',
    ],
})
