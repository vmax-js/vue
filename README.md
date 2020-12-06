# 动态路由匹配
```js
{
    path:'/question/:id',
    name:'question',
    component:() => import('./views/Question')
}
```


## axios使用
```js
// 每个组件中都可以用到 this.$axios
Vue.prototype.$axios = axios;
```
- axios.js
```js
import axios from 'axios'
// 设置基础路径
axios.defaults.baseURL = 'http://localhost:8081/';
// 为axios加一个拦截器
axios.interceptors.request.use(request => {
    // request.url get中的参数
    request.url = request.url + ".json";
    // console.log(request.url)
    return request;
})
axios.interceptors.response.use(response => {
    if (response.status == 200) {
        return response.data.data;
    }
})
export default axios;
```
- 当我们需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”来达到这个效果：
```js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```
经过这样的设置，像 /user/foo 和 /user/bar 都将映射到相同的路由。

一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。