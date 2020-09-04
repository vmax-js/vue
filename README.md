# vue

# v-model指令
- 可以在**表单元素**上**创建双向数据绑定**
- 本质上就是用vue写出来的

## input
- 监听了input事件...
- input[type="text"] @input :value
- input[type="checkbox"] @change :checked
- input[type="radio"] @change :checked

```html
 <input type="text" @input="msg=$event.target.value" :value="msg">
```

```html
<div id="app">
       <input type="text" v-model="msg"/>
   </div>
   <script>
       const vm = new Vue({
           el: "#app",
           data:{
               msg:"hello word"
           }
       })
   </script>
```

```js
<input type="checkbox" v-model="checked">
data:{
    msg:"hello word",
    checked:true
}
```


```html
<input type="checkbox"  id="ping" value="苹果" v-model="checkList">
<label for="ping">苹果</label>
<input type="checkbox"  id="xiang" value="香蕉" v-model="checkList">
<label for="xiang">香蕉</label>
<input type="checkbox"  id="li" value="荔枝" v-model="checkList">
<label for="li">荔枝</label>
```

```html
<input type="radio"  id="ping" value="苹果" v-model="checkStr">
<label for="ping">苹果</label>
<input type="radio"  id="xiang" value="香蕉" v-model="checkStr">
<label for="xiang">香蕉</label>
<input type="radio"  id="li" value="荔枝" v-model="checkStr">
<label for="li">荔枝</label>
```

## textarea
```html
<textarea v-model="multiple"></textarea>
```

## select
```html
<select v-model="select">
<option value="tan">tan</option>
<option value="tan1">tan1</option>
<option value="tan2">tan2</option>
</select>
```

```html
<select v-model="selectList" multiple>
<option value="tan">tan</option>
<option value="tan1">tan1</option>
<option value="tan2">tan2</option>
</select>
```

```html
<select v-model="select">
    <option value="请选择" disabled>请选择</option>
    <option value="tan">tan</option>
    <option value="tan1">tan1</option>
    <option value="tan2">tan2</option>
</select>
```
### 修饰符
- .lazy
输入完成后触发,不是边写边同步
```html
<input type="text" v-model.lazy="msg">
```

- .number
将输入的数字转换为数字类型
```html
<input type="text" v-model.number="msg">
```
- .trim
清除输入的前后空白字符
<input type="text" v-model.trim="msg">

