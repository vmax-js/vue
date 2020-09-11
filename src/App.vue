<template>
  <div id="app" class="app">
  
    <!-- <base-level :level="1">标题</base-level>
    <base-level :level="2">标题</base-level>
    <base-level :level="3">标题</base-level>
    <base-level :level="4">标题</base-level>
    <base-level :level="5">标题</base-level>
    <base-level :level="6">标题</base-level> -->
    <base-data></base-data>
  </div>
</template>

<script>
import  BaseLevel  from "./components/BaseLevel";
import  BaseData from "./components/BaseData";
export default {
  name: "app",
  components: {
    BaseLevel,
    BaseData
  }
};
</script>

<style scoped>




</style>