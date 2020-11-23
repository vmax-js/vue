<template>
  <div class="base-data">
    <button @click="show = !show">click</button>
    <!-- appear 页面一打开或者刷新的过渡 -->
    <transition
    appear-active-class="animate__animated animate__hearBeat"
    enter-active-class="animate__animated animate__backInDown"
    leave-active-class="animate__animated animate__backOutUp"
    >
    <div class="box" v-if="show">please click button</div>
    </transition>
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
.box {
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin-top: 200px;
  color: red;
  text-align: center;
  line-height: 200px;
}

</style>