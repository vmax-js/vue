<template>
  <div class="base-data">
    <button @click=" show = !show ">click</button>
    <transition>
      <div class="container box1" v-if="show">hello word</div>
    </transition>
    <transition>
      <div class="container box2" v-if="show">hello word</div>
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
.container {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: red;
  border: 1px solid black;
  margin-top: 20px;
}

.box1.v-enter{
    opacity: 0;
    transform: translateX(300px);
}
.box1.v-enter-active
{
    transition: all 2s;
}
.box1.v-enter-to{
    opacity: 1;
    transform: translateX(0px);
}


.box1.v-leave{
    opacity: 1;
    transform: translateX(0px);
}
.box1.v-leave-active{
    transition: all 2s;
}
.box1.v-leave-to{
    opacity: 0;
    transform: translateX(300px);
}



.box2.v-enter{
    opacity: 0;
    transform: translateY(300px);
}
.box2.v-enter-active
{
    transition: all 2s;
}
.box2.v-enter-to{
    opacity: 1;
    transform: translateY(0px);
}


.box2.v-leave{
    opacity: 1;
    transform: translateY(0px);
}
.box2.v-leave-active{
    transition: all 2s;
}
.box2.v-leave-to{
    opacity: 0;
    transform: translateY(300px);
}
</style>