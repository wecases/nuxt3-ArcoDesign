<template>
    <a-layout class="h-screen flex-row" hide-trigger>
        <a-layout-sider collapsible :collapsed="collapsed" hide-trigger>
            <div class="logo" />
            <a-menu
                :defaultOpenKeys="['1']"
                :defaultSelectedKeys="['0_3']"
                :style="{ width: '100%' }"
                @menuItemClick="onClickMenuItem"
            >
                <a-menu-item key="0_1" disabled>
                    <client-only>
                        <icon-home></icon-home>
                    </client-only>
                    <span>Menu 1</span>
                </a-menu-item>
                <a-menu-item key="0_2">
                    <client-only>
                        <icon-calendar></icon-calendar>
                    </client-only>
                    <span>Menu 2</span>
                </a-menu-item>
                <a-menu-item key="0_3">
                    <client-only>
                        <icon-calendar></icon-calendar>
                    </client-only>
                    <span>Menu 3</span>
                </a-menu-item>
                <a-sub-menu key="1">
                    <template #title>
                        <span>
                            <client-only>
                                <icon-calendar></icon-calendar>
                            </client-only>
                            <span>Navigation 1</span>
                        </span>
                    </template>
                    <a-menu-item key="1_1">Menu 1</a-menu-item>
                    <a-menu-item key="1_2">Menu 2</a-menu-item>
                    <a-sub-menu key="2" title="Navigation 2">
                        <a-menu-item key="2_1">Menu 1</a-menu-item>
                        <a-menu-item key="2_2">Menu 2</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="3" title="Navigation 3">
                        <a-menu-item key="3_1">Menu 1</a-menu-item>
                        <a-menu-item key="3_2">Menu 2</a-menu-item>
                        <a-menu-item key="3_3">Menu 3</a-menu-item>
                    </a-sub-menu>
                </a-sub-menu>
                <a-sub-menu key="4">
                    <template #title>
                        <span>
                            <client-only>
                                <icon-calendar></icon-calendar>
                            </client-only>
                            <span>Navigation 4</span>
                        </span>
                    </template>
                    <a-menu-item key="4_1">Menu 1</a-menu-item>
                    <a-menu-item key="4_2">Menu 2</a-menu-item>
                    <a-menu-item key="4_3">Menu 3</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="padding-left: 20px">
                <a-button shape="round" @click="onCollapse">
                    <client-only>
                        <icon-caret-right v-if="collapsed" />
                        <icon-caret-left v-else />
                    </client-only>
                </a-button>
            </a-layout-header>
            <a-layout style="padding: 0 24px">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content>
                    <nuxt-page></nuxt-page>
                </a-layout-content>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
const collapsed = ref(false)
const onCollapse = () => {
    collapsed.value = !collapsed.value
}
const onClickMenuItem = function (key: string) {
    console.log(key)

    Message.info({ content: `You select ${key}`, showIcon: true })
}
</script>
