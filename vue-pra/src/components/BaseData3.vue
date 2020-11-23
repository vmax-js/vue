<template>
  <div class="base-data">
    <button @click="show = !show">click</button>
    <transition>
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
.v-enter-active{
    animation: animate 2s;
}
.v-leave-active{
    animation: animate 2s reverse;
}
@keyframes animate {
    0%{
        opacity: 0;
        transform: translateX(600px) scale(1);
    }
    50%{
        transform: translateX(300px) scale(1.5);
    }
    100%{
        opacity: 1;
        transform: translateX(0) scale(1);
    }
}
</style>