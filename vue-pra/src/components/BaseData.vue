<template>
  <div class="base-data">
    <button @click=" show = !show ">click</button>
    <transition>
      <div class="container" v-if="show">hello word</div>
    </transition>
    <!-- <transition>
      <div class="container" v-if="show">hello word</div>
    </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.container {
  width: 300px;
  height: 300px;
  text-align: center;
  line-height: 300px;
  color: red;
  border: 1px solid black;
  margin-top: 20px;
}

.v-enter,
.v-leave-to{
    opacity: 0;
    transform: translateX(300px) scale(1);
}
.v-enter-active,
.v-leave-active{
    transition: all 2s;
}
.v-enter-to,
.v-leave{
    opacity: 1;
    transform: translateX(0px) scale(1.5);
}
</style>