import {
    createRouter,
    createWebHashHistory
}from 'vue-router'

const routes = []

const router = createRouter({
    history:createWebHashHistory(),//sync
    routes:routes
})

export default router