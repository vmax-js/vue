import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'

Vue.use(VueRouter);

const routes = [{
    // 根路径
    path: '/',
    component: Home
}, {
    path: '/learn',
    // 异步组件 当我们点击的时候才会去加载渲染
    component: () => import('./views/Learn.vue')
}, {
    path: '/student',
    component: () => import('./views/Student')
}, {
    path: '/activity',
    component: () => import('./views/Activity')
}, {
    path: '/about',
    component: () => import('./views/About')
}]
export default new VueRouter({
    routes
})