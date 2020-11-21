<template>
  <div id="app" class="app">
      <!-- <base-level :level="1">标题</base-level>
      <base-level :level="2">标题</base-level>
      <base-level :level="3">标题</base-level>
      <base-level :level="4">标题</base-level>
      <base-level :level="5">标题</base-level>
      <base-level :level="6">标题</base-level> -->
      <base-date></base-date>
  </div>
</template>

<script>
import BaseLevel from './components/baseLevel.vue'
import BaseDate from './components/baseDate.vue'

export default {
    name:'app',  
    components:{
      BaseLevel,
      BaseDate,
    }
}
</script>

<style scoped>

</style>