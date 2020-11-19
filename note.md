## 利用vue脚手架搭建项目

### 创建vue项目
#### 命令行中搭建项目
1. 输入命令``` vue create 名字 ```,名字中不能有大写字母,执行命名后,会让我们选择项目包含的一些预设。
   
   - 空格 选择 
   - 其中babel 会把vue转化为js，es6转化为es5,让浏览器去执行。
   - Linter / Formatter,团队开发的代码规范
   - Unit Testing，单元测试
     - 预设选择完后
       - In dedicated config files ，将预设的配置分别放入单独的文件
       - In package.json ，放到一个配置文件中
   - 接下来按令指向进行
  
2. 完成上面步骤，项目文件中会出现配置好的文件
   
    - public文件，就是这个URL http://localhost:8080/ 默认的路径,默认打开index.html,http://localhost:8080/xx.json,就会打开public下面的xx.json.
    
    - public文件下面的favicon.ico就是浏览器标签页左上角的图标
    - public/index.html里面利用webpack自动注入了 src/main.js
    - src/main.js中 render: h => h(App), 为渲染函数 h(App)就是渲染App.vue 
    - main.js中 Vue.config.productionTip = false，在生产环境中没有提示

    - src/components 用来放组件的
    - src/assets 静态文件

    - 这个脚手架是webpack搭建的但是看不到webpack的配置文件，因为vue为我们隐藏了，如果要使用webpack配置，可以在src文件下添加一个vue.config.js写webpack的配置。

#### 图形化搭建项目
命令``` vue ui ```