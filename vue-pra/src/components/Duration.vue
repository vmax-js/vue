<template>
  <div class="base-data">
    <button @click="show = !show">click</button>

    <transition name="div" :duration="2000">
      <div class="box" v-show="show">
        <transition name="span">
          <span v-if="show">hello word</span>
        </transition>
      </div>
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
.span-enter,
.span-leave-to {
  font-size: 10px;
}
.span-enter-active,
.span-leave-active {
  transition: all 4s;
}
.span-enter-to,
.span-leave {
  font-size: 28px;
}

.div-enter,
.div-leave-to {
  opacity: 1;
  transform: translateX(300px);
}
.div-enter-active,
.div-leave-active {
  transition: all 2s;
}
.div-enter-to,
.div-leave {
  opacity: 1;
  transform: translateX(0px);
}
</style>