# vuex

共享状态（数据）管理工具

## 安装
```npm i vuex```

## 在vue中使用
在main.js中进行配置
```js
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    // 状态（数据）
    count:0
  }
});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
```

配置好了之后，可以借助vue-devtool工具在浏览器中查看

F12打开控制台，vue-》vuex

- 一般会将vuex的配置放在store.js中，然后在main.js中引入

store.js中的配置

```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:0
    }
})
export default store;
```

## 在组件中获得vuex的状态（数据）

在配置中```Vue.use(Vuex)```后，将状态跟随组件注入到每一个子组件中

子组件能通过```this.$store```访问vuex的状态

```this.$store```为一个对象,里面有很多函数

```this.$store.state```就是我们配置的状态

```this.$store.state.count```获取具体的状态

```组件中改变了状态，那么也会影响到使用到这个状态的组件```

### 在视图中使用

直接```{{ $store.state.count }} ```

这样写会一长串，那么可以将其作为组件的自己的属性，利用计算属性来实现。

```vue
<template>
  <div class="home">
    首页
    <button @click="$store.state.count++">点击</button>
    <!-- {{ $store.state.count }} -->
    {{ count }}
  </div>
</template>

<script>
export default {
  computed:{
      count(){
          return this.$store.state.count;
      }
  },
};
</script>
```

这样写还是会造成冗余，因为状态可能有很多。

vuex帮我们解决了这个问题。

```js
// 需要引入
import { mapState } from 'vuex';
export default {
  computed:{
    //   count(){
    //       return this.$store.state.count;
    //   }
    // mapState(['count']) 会返回一个计算函数
    ...mapState(['count'])
  },
```
和组件中数据重名后，data的优先级高，这是需要我们重新命名，可以改data中的数据名，如果data中的数据名参与了过多的逻辑，这时可以更改mapState中的数据名

```js
mapState({
  // 重命名的数据变量 后面是一个函数，函数第一个参数是state，函数的返回值就是变量的值
  storeCount:(state) => state.count;
  // 如果不需要对仓库中的状态处理的话，可以简写
  storeCount:'count'; //(state) => state.count;
})
```
