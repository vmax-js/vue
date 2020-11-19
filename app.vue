<template>
  <div>
    App.vue
    {{ msg }}
    <base-son/>
  </div>
</template>


<script>
import baseSon from "./son";
export default {
  components: {
      baseSon
  },
  data() {
    return {
      msg: "hello App"
    };
  },
};
</script>

<style scoped>
div {
  background: red;
}
</style>