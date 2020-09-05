# 计算属性
- String.split(','),按照,进行分割成数组

- 有的时候我们在模版中的{{}}写入了过多的逻辑,不易维护,这时计算属性起到了作用
## 什么是计算属性
- 是VUE配置对象中的属性

- 它data一样代理了给vue的实例对象

- 它的值就是配置对象中computed的值，函数就是返回值

- 计算属性是可以根据它关联的数据的值而发生改变，动态的

```js
<div> {{someComputed}} </div>
const vm = new Vue({
    computed:{
        someComputed: function(){
            //this 也是vue实例对象
            return xxx;
        }
    }
})
```
## Vue的方法methods和computed有什么区别

- 他们都是动态的，会根据数据的改变而改变
- methods是页面重新渲染就会执行，不管这个改变的数据和它有没有关联
- 但是computed运行是它关联的数据发生改变才会运行，它关联的数据没有发生改变，页面重新渲染不会执行
- **计算属性是基于响应式依赖缓存的**，节省性能开销

## 计算属性的类型
- 只有当依赖的响应式属性变化了，计算属性才会重新计算,当为对象的时候set()时页面数据不会更新
- 函数
- 对象
```js
const vm = new Vue({
el: '#app',
data: {
    msg:'hello,nihao,tna',
    name:'tan',
    age:23
},
computed:{
    someComputed: function(){
        return this.msg.split('').reverse().join('');
    },
    desc:{
        get(){
            return `${this.name},${this.age}`;
        },
        set(val){
            this.name = val;
            console.log(val);
        }
    }
}
})
```