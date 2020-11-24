<template>
  <div id="app">
    <!-- 默认渲染为a标签 tag可以指定标签 -->
    <div class="nav">
      <div class="logo">TSCN社区</div>
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
  components: {}
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
