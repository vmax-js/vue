<template>
  <div class="base-data">
    <button @click="show = !show">click</button>
    <!-- animate.css 和transition一起使用 -->
    <!-- type 以谁为主 若是animation，一旦动画结束，整个过渡也结束-->
    <!-- :duration="ms" 显示定义动画和过渡的结束时间-->
    <!-- duration还可以用在父子元素中 -->
    <transition
    type="animation"
    :duration="100"
    enter-active-class="v-enter-active animate__animated animate__swing"
    leave-active-class="v-leave-active animate__animated animate__swing"
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

.v-enter,.v-leave-to{
    opacity: 0;
}
.v-enter-active,.v-leave-active{
    transition: all 10s;
}
.v-enter-to,.v-leave{
    opacity: 1;
}



</style>