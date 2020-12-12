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

### getter

getter是store的计算属性，getter的返回值会根据它的依赖被缓存起来
且当它的依赖值发生了改变才会被重新计算。

- 使用

在store.js中配置

```js
const store = new Vuex.Store({
    state:{
        count:0,
        studentList:[]
    },
    // 是复数 有多个getters，里面是函数，第一个参数是state
    getters:{
        doubleCount(state){
            return state.count * 2;
        },
        // 可以返回一个函数
        addCount(state){
          return function(num){
            return state.count + num;
          }
        }


    },
})  
```

配置好了和count一样在组件中使用，视图中可以
{{ $store.getters.doubleCount }}

- mapGetters辅助函数

和mapState使用差不多

在组件中引入mapGetters
```js
import { mapGetters } from 'vuex';


computed:{
    //   count(){
    //       return this.$store.state.count;
    //   }
    ...mapState(['count']),
    ...mapGetters(['addCount','doubleCount'])
  },
```

### mutation  

英文为变异，改变的意思

#### vuex的严格模式下

开启严格模式，仅需在创建store的时候传入 strict：true

```js
const store = new Vuex.Store({
  //...
  strict:true
})
```

```在严格模式下，无论何时发生了状态变更且不是mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。```

```更改vuex的store中的状态的唯一方法是提交mutation```

vuex中的单向数据流

状态 -> 视图改变 -> mutation -> 状态

#### 开发环境和发布环境

不要在发布环境中开启严格模式，严格模式会深度监测状态树来检测不合格的状态变更，要确保在发布环境下关闭严格模式，以避免性能的损失。

```js
const store = new Vuex.Store({
  //...
  strict: process.env.NODE_ENV !== 'production'
})
```
### mutation使用
在store配置中
```js
  mutations:{
        countIncrement(state){
            // 变更状态
            state.count++;
        }
    }
```

在组件中提交

```js
methods:{
      handleClick(){
          this.$store.commit('countIncrement');
      }
  }
```

- mapMutation

```js
  methods:{
      ...mapMutations('countIncrement'),
      handleClick(){
        //   this.$store.commit('countIncrement');
        this.countIncrement();
      }
  }
```

- 为什么不在computed中使用mapMutation，它返回的是一个函数。

- mutation根据提交的时候传递的参数，来改变状态
```js
 mutations:{
        countIncrement(state,num){
            // 变更状态
            state.count += num;
        }
    }
```
```js
methods:{
    //   ...mapMutations('countIncrement',10),
      handleClick(){
        // 第二个就是要传递的参数 一般写成一个对象
          this.$store.commit('countIncrement',
          { 
                num: Math.floor(Math.random()* 100;
          }
          );
          // this.$store.commit('countIncrement',10);
        // this.countIncrement();
      }
  }
```
若写成对象，那么mutations那边就要进行解构处理

```js
mutations:{
        countIncrement(state,{num}){
            // 变更状态
            state.count += num;
        }
    }
```

commit中的第二参数，专业叫载荷(payload)。

commit中的参数可以直接传一个对象

```js
this.$store.commit({
            //   mutaion的函数名
              type:'countIncrement',
            //   数据
              num:10
          });
```
store.js中

```js
mutations: {
        countIncrement(state, payload) {
            // 变更状态
            state.count += payload.num;
        }
    }
```
#### mutation配置文件

可以将mutation的名字单独放在一个文件中，名字为大写

mutation-types.js中
```js
export const COUNT_INCREMENT = 'COUNT_INCREMENT';
```

```js
import {
    COUNT_INCREMENT
} from './mutation-types.js';
mutations: {
        // countIncrement(state, payload) {
        //     // 变更状态
        //     state.count += payload.num;
        // }
        [COUNT_INCREMENT](state,payload){
            state.count += payload.num;
        }
    }
```
组件中
```js
this.$store.commit({
            //   mutaion的函数名
              type:'COUNT_INCREMENT',
            //   数据
              num:10
          });

```

### mutation需遵守vue的响应规则

当需要在对象中添加新属性的时候，应该使用,不然就视图不会刷新

1. Vue.set(obj,'newProp',123);

2. 以新对象替换老对象，例如
```js
state.obj = {...state.obj,newProp:123}
```
```js
 [OBJ_B](state,payload){
            Vue.set(state.obj,'b',2)
            // state.obj = {...state.obj,b:2};
        }
```
### 表单处理

在vuex的state上使用v-model时，由于会直接更改state的值，vue会抛出错误。

如果想要使用双向数据的功能，就需要自己模拟一个，如下：

mutation-types.js文件中

```js
export const CHANGE_MSG = 'CHANGE_MSG';
```

```js
import {CHANGE_MSG} from 'mutation-types.js';
const store = new Vuex.Store({
  state:{
    msg:''
  },
  mutations:{
    [CHANGE_MSG](state,{value}){
      state.msg = value;
    }
  }
})
```

```vue
<template>
  <div>
        <input :value="msg" @input="handleInput" />{{ msg }}
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {CHANGE_MSG} from 'mutation-types.js';
  export default {
      computed:{
        ...mapState(['msg'])
      },
      methods:{
        handleInput(e){
          this.$store.commit(CHANGE_MSG,{value: e.target.value});
        }
      }
  }
</script>
```
上面这种实现方法有点麻烦

还可以借助计算属性中的get,set方法来实现
```vue
<template>
  <div>
        <input v-model='msg'/>{{ msg }}
  </div>
</template>

<script>
import {mapState} from 'vuex';
import {CHANGE_MSG} from 'mutation-types.js';
  export default {
      computed:{
        // ...mapState(['msg']);
         msg:{
        get(){
            return this.$store.state.msg;
        },
        set(value){
            this.$store.commit(CHANGE_MSG,{value})
            }
        }
      }, 
  }
</script>
```
```js
export const CHANGE_MSG = 'CHANGE_MSG';
```

```js
import {CHANGE_MSG} from 'mutation-types.js';
const store = new Vuex.Store({
  state:{
    msg:''
  },
  mutations:{
    [CHANGE_MSG](state,{value}){
      state.msg = value;
    }
  }
})
```
### mutation中的函数不能是异步的

- 异步会导致调试出现问题，不能追踪，vue也会报不能在mutation之外更改的错误，异步函数，将在异步队列中执行。

- action会解决这个问题

## Action

Action和mutation类似，但有两点区别：

1. action不能直接变更状态，而是通过提交mutation来变更状态
  
2. action中可以包含任意的异步操作，而mutation不能

action函数接受一个与store实例具有相同方法和属性的context对象，因此可以直接调用```context.commit```提交一个mutation，或者通过```context.getters``` 和 ```context.state```来获取getters和state

```js
const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++;
    }
  },
  actions:{
    increment(context){
      context.commit('increment');
    }
  }
})
```

那组件中怎么去使用action，这就需要分发action

### 分发action

```this.$store.dispatch('increment')```

### 关与map

- mapState 计算属性
- mapGetters 计算属性
- mapMutations 返回一个函数 methods
- mapActions 返回一个函数 methods

### Actions异步操作
action提交的mutation
```js
actions: {
        countIncrement(context) {
            setTimeout(() => {
                context.commit('increment');
            }, 1000)
        }
    }
```

- 那怎么知道异步action的结束时刻，可以在actions函数里面返回一个promise。

```js
actions: {
        countIncrement(context) {
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    context.commit('increment');
                    resolve(12);
                }, 1000)
            })
           
        }
    }
```
分发的时候then一下弹出一个弹框

```js
this.$store.dispatch('countIncrement').then(res=>{
          alert('actions结束'+res);
      });
```

## vuex-module
之前使用的是单一状态数，应用的所有状态会集中到一个比较大的对象中。
那么modules就是来解决这个问题的，vuex允许我们分割模块（module）。每个模块拥有自己的state，getter，mutation，action。

```js
const store = new Vuex.Store({
  modules:{
    module1,
    module2
  }
})
```
```注意```

1. 只有state获取时要加上面模块名，其它正常使用
2. 获取state：```this.$store.modulesName.xxx;```
3. 获取getter：```this.$store.getters.xxx;```
4. 提交mutation：```this.$store.commit(xxx);```
5. 分发actin：```this.$store.dispatch(xxx);```
6. 可以通过mapstate，mapGetters，mapMutation，mapAction拿到对应的，但mapState拿不到，要实现的话需要命名空间。

### 命名空间
可以通过添加```namespace:true```的方式使其成为带命名空间的模块。

获取state： ```this.$store.state.modulesName.xxx;```
获取getter：```this.$store.getters['modulesName/xxx'];```
提交mutation：```this.$store.commit('modulesName/xxx');```
分发actin：```this.$store.dispatch('modules/xxx');```

## 模块的局部状态
- 对于模块内部的mutation和getter，接受的的第一个参数是模块的局部对象。
  
- 对于模块内部的action，局部状态通过context.state暴露出来，根节点为context.rootState

- 对于模块内部的getter，根节点状态会作为第三个参数暴露出来