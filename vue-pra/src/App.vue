<template>
  <div id="app">
    <!-- <base-data></base-data> -->
    <!-- <base-data1></base-data1> -->
    <!-- <base-data2></base-data2> -->
    <!-- <base-data3></base-data3> -->
    <!-- <base-data-animate></base-data-animate> -->
    <!-- <animate-transition></animate-transition> -->
    <!-- <duration></duration> -->
    <appear1></appear1>
  </div>
</template>

<script>
// 基本使用
import BaseData from './components/BaseData.vue'
import BaseData1 from './components/BaseData1.vue'
import BaseData2 from './components/BaseData2.vue'
import BaseData3 from './components/BaseData3'
import BaseDataAnimate from './components/BaseDataAnimate'
import AnimateTransition from './components/AnimateTransition'
import Duration from './components/Duration'
import Appear1 from './components/Appear1'
export default {
  name: 'App',
  components: {
    BaseData,
    BaseData1,
    BaseData2,
    BaseData3,
    BaseDataAnimate,
    AnimateTransition,
    Duration,
    Appear1
  }
}
</script>

<style>

</style>
