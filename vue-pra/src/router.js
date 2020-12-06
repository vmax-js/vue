import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        // 重定向
        redirect: '/home'
    },
    {
        // 根路径
        path: '/home',
        name: 'home',
        component: Home,
        // 别名
        // alias:'/'
    },
    {
        path: '/learn',
        // 异步组件 当我们点击的时候才会去加载渲染
        // component: () => import('./views/Learn.vue')
        components: {
            default: () => import('./views/Learn.vue'),
            student: () => import('./views/Student.vue')
        }
    }, {
        path: '/student',
        component: () => import('./views/Student')
    }, {
        path: '/activity',
        // 合并异步组件 webpack
        component: () => import( /* webpackChunkName:'activity'*/ './views/Activity'),
        // 重定向和空路径不要同时写 第一种写法 将exact改为active
        // redirect:'/activity/acdemic',

        // 第二种写法 重定向
        // redirect: {
        //     name: 'acdemic'
        // },

        // 第三种写法 函数
        redirect: (to) => {
            // console.log(to);
            return {
                name: 'acdemic'
            }
        },
        // 嵌套路由
        children: [
            // 
            // {
            //     // 在activity中直接展示
            //     path: '',
            //     component: () => import('./views/Acdemic')
            // },
            {
                //  path不需要加/
                path: 'acdemic',
                // 命名路由
                name: 'acdemic',
                component: () => import( /* webpackChunkName:'activity'*/ './views/Acdemic')
            }, {
                path: 'download',
                name: 'download',
                component: () => import('./views/Download')
            }, {
                path: 'personal',
                name: 'personal',
                component: () => import('./views/Personal')
            }
        ]
    }, {
        path: '/about',
        component: () => import('./views/About'),
        // 独享守卫
        beforeEnter:(to,from,next)=>{
            console.log('独享守卫')
            next();
        }
    }, {
        path: '/question/:id',
        name: 'question',
        // 组件传参
        // props: true,
        props: (route) => ({
            name: route.name,
            id: route.params.id
        }),
        component: () => import('./views/Question')
    }
]
const router = new VueRouter({
    routes,
    // 模式 http://localhost:8080/about
    mode: 'history'
})

router.beforeEach((to,from,next) => {
    // 目标
    // console.log(to);
    // 开始位置
    // console.log(from);
    // 跳转
    console.log('beforeEach')
    next();
    // 不跳转
    // next(false)

    // if(to.path == '/student'){
    //     next('/home');
    //     // this.$router.push()
    // } else {
    //     next();
    // }

    // next(new Error('不让跳转'))
    
})

router.beforeResolve((to, from,next)=>{
    console.log('beforeResolve');
    next();
   
})

router.afterEach((to,from)=>{

})

export default router;