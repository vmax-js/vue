## 编程式的导航
### 点击logo回到首页
1. 使用<router-link></router-link>
2. 当我们在main.js的使用new Vue({router}),$router、$route两个属性会被注入到每个子组件
   1. $router是路由的实例对象
    
   2.  $router 路由的实例对象
      console.log(this.$router);
      this.$router中有push方法 router-link底层就是push来实现的

      this.$router.push('/home');

      也能实现push的功能
      this.$router.replace('/home');

      this.$router.push()和this.$router.repalce()的区别
      push ['/a','/b','/c','/home']
      repalce ['/a','/b','/home']
      浏览器回退的时候有影响

      this.router.go() 正数前进 负数后退
      参数为0相当于刷新
      若记录不够用，默默失败,如go(100) 

      $router 路由信息 只读

3. 合并异步组件 webpack
        component: () => import(/* webpackChunkName:'activity'*/'./views/Activity'),
      