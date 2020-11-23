<template>
  <div class="base-data">
    <button @click=" show = !show ">click</button>
    <!-- 自定义过渡的类名 -->
    <transition 
    enter-class = "enter"
    enter-active-class = "enter-active"
    enter-to-class = "enter-to"
    leave-class = "leave"
    leave-active-class = 'leave-active'
    leave-to-class = 'leave-to'
    >
      <div class="container box1" v-if="show">hello word</div>
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

.enter{
    opacity: 0;
    transform: translateX(300px);
}
.enter-active
{
    transition: all 2s;
}
.enter-to{
    opacity: 1;
    transform: translateX(0px);
}


.leave{
    opacity: 1;
    transform: translateX(0px);
}
.leave-active{
    transition: all 2s;
}
.leave-to{
    opacity: 0;
    transform: translateX(300px);
}




</style>