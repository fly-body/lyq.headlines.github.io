import Vue from 'vue'
import Router from 'vue-router'

const TopNews = () => import('../views/topNews/TopNews.vue')
const TypeNews = () => import('../views/typeNews/TypeNews.vue')

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TopNews
    },
    {
        path: '/topNews',
        name: 'TopNews',
        component: TopNews
    },
    {
        path: '/typeNews',
        name: 'TypeNews',
        component: TypeNews
    }
]

const router = new Router({
    routes,
    mode: 'hash'
})

export default router