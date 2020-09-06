# 侦听器

- 侦听属性，侦听data和computed响应数据,当数据变化时立即执行相应的函数

## 使用

```js
const vm = new Vue({
    watch:{
        //key:value
        要侦听的数据(data/computed):函数
    }
})
```
- 实例

```js
watch:{
    msg:function(newVal,oldVal){
        console.log(newVal,oldVal);
    }
}
```
## key是侦听的数据，value可以是函数

## value是字符串，代表methods的函数名

## value是对象
```js
watch:{
    msg:{
        //必要的回调函数
        handler(){
            //数据发生改变了 运行
        },
        deep:boolean, //默认是false,如果监听的是对象,那么引用变了才会执行回调函数，true的话就是对象里面的数据改变了就会执行回调函数，但是会消耗性能
        immediate:boolean,//默认false 如果是true那么一开始就会执行回调函数一次
    }
}
```

## value是数组

数组里面可以写函数，字符串，对象

## key可以是字符串
对象中的属性写成字符串来侦听 就不用deep，优化性能
```js
watch:{
    'obj.name':function(){
        
    }
}
```
## vm.$watch()
### 参数个数
- 三个参数
```js
vm.$watch('msg',function(){
    //回调函数
},{
    deep:false,
    immediate:false
})
```
- 两个参数
```js
vm.$watch('msg',{
    handler(){
        //对调函数
    },
    deep:false,
    immediate:false
})
```
### 第一个参数的值
- 字符串 可以是data中的数据名,data中对象的属性名
- 函数，函数的返回值就是要侦听的数据

## vm.$watch()的返回值
- 返回值为一个函数，这个函数可以取消监听

```js
const unwatch = vm.$watch({
    'msg',
    function(newval){
        if(newval == 'xxx'){
            unwatch();
        }
        console.log("11111");
    }
})
```
- 配合使用immediate 要用var
```js
var unwatch = vm.$watch({
    'msg',
    function(){
        if(unwatch){
            unwatch();
        }
        console.log('11111');
    },{
        immediate:true
    }
})
```

## watch 和计算属性的区别
- watch 一对多 计算 多对1
- watch 可以处理异步 computed不可以处理异步
