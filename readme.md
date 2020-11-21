## 渲染函数
- 首先看el有无,如果没有看$mount()
- 再看template有无,如果没有看el.outerHTML，进行渲染
```js
new Vue({
    // template:'<p>hahah</p>', render的优先级比template高
  render: h => h(App),
}).$mount('#app')
``` 

- vue完整版
- vue运行时的版本，即是vue脚手架搭建的项目，少了编辑器，体积少了30%，但是没有影响，有render函数就可以

- render不仅体积小，而且还可以结合js进行编程，比template好
