<template>
  <div id="app">
    <!-- 默认渲染为a标签 tag可以指定标签 -->
      <router-link to="/" tag='a'>Home</router-link>
      <router-link to="/learn">Learn</router-link>
      <router-link to="/student">Student</router-link>
      <router-link to="/activity">Activity</router-link>
      <router-link to="/about">About</router-link>

      <!-- 实习面试问到过 渲染不同路由的内容 -->
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>

</style>
