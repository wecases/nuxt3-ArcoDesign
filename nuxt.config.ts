import { defineNuxtConfig } from 'nuxt3'

import Components from 'unplugin-vue-components/vite'
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
                        prefix: 'i'
                    }),
                    ArcoResolver({
                        importStyle: 'css',
                        resolveIcons: true
                    })
                ],
            }),
        ],
    },
    build: {
        transpile: ['compute-scroll-into-view', '@arco-design/web-vue'],
    },
})
