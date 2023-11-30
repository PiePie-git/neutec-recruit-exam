import { createRouter, createWebHistory } from 'vue-router'
import Demo from '@/views/demo.vue'
import AdvancedDemo from '@/views/advanced_demo.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/demo',
            component: Demo
        },
        {
            path: '/advanced_demo',
            component: AdvancedDemo
        },
    ]
})
