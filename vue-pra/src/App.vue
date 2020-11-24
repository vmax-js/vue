<template>
  <div id="app">
    <!-- 默认渲染为a标签 tag可以指定标签 -->
    <div class="nav">
      <div class="logo" @click="handelClick">TSCN</div>
      <!-- <router-link tag="div" class="logo" :to="{ name: 'home'}" >
        TSCN社区
      </router-link> -->
      <div class="text">
        <router-link to="/home" tag="a">Home</router-link>
        <router-link to="/learn">Learn</router-link>
        <router-link to="/student">Student</router-link>
        <router-link to="/activity">Activity</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>

    <!-- 实习面试问到过 渲染不同路由的内容 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods:{
    handelClick(){
      // $router 路由的实例对象
      // console.log(this.$router);
      // this.$router中有push方法 router-link底层就是push来实现的

      // this.$router.push('/home');

      // 也能实现push的功能
      // this.$router.replace('/home');

      // this.$router.push()和this.$router.repalce()的区别
      // push ['/a','/b','/c','/home']
      // repalce ['/a','/b','/home']
      // 浏览器回退的时候有影响

      // this.router.go() 正数前进 负数后退
      // 参数为0相当于刷新
      // 若记录不够用，默默失败,如go(100) 

      // $router 路由信息 只读
    }
  }

  
};
</script>

<style scoped>
.nav {
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 60px;
  font-size: 18px; 
  color: aliceblue;
}
.nav .logo{
  font-weight: bold;
  padding-left: 200px;
  cursor:pointer;
}
.nav a {
  text-decoration: none;
  color: aliceblue;
  margin-right: 60px; 
}
/* .nav .text a.router-link-exact-active{
  font-weight: bolder;
  border: 1px solid white;
  border-radius: 20%; 
} */

/* 为了activity选中有样式 */
.nav .text a.router-link-active{
  font-weight: bolder;
  border: 1px solid white;
  border-radius: 20%; 
}
#app .content{
  margin-top: 30px; 
  padding: 0px 200px; 
}
</style>
