import { defineNuxtConfig } from 'nuxt3'

import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ArcoResolver } from "unplugin-vue-components/resolvers";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: {
        plugins: [
            Components({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'icon'
                    }),
                    ArcoResolver({
                        resolveIcons: false
                    })
                ],
            }),
            Icons()
        ],
    },
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
