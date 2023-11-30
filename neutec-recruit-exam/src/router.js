import { createRouter, createWebHistory } from 'vue-router'
import Demo from '@/views/demo.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/neutec-demo',
            component: Demo
        },
    ]
})
