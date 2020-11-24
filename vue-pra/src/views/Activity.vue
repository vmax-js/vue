<template>
  <div class="activity">
    <!-- 命名路由 -->
    <div class="nav">
      <router-link :to="{ name:'acdemic' }">Acdemic</router-link>
      <router-link :to="{ name:'personal' }">Personal</router-link>
      <router-link :to="{ name:'download' }">Download</router-link>
    </div>
    <div class="view">
         <router-view></router-view>
    </div>
   
  </div>
</template>

<style scoped>
.activity .nav a{
    text-decoration: none;
    
    margin-right:10px; 
    padding: 5px 10px;
    color: #000;
}
.activity .nav a.router-link-exact-active{
    background-color: blue; 
    color: aliceblue;
}
.view{
    margin-top: 40px;
    margin-left: 10px;
}
</style>