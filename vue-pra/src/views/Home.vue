<template>
  <div class="home">
    首页
    <button @click="$store.state.count++">点击</button>
    <!-- {{ $store.state.count }} -->
    {{ count }}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
//   data() {
//     return {
//       count: this.$store.state.count
//     };
//   },
  computed:{
    //   count(){
    //       return this.$store.state.count;
    //   }
    ...mapState(['count'])
  },
  mounted() {
    console.log(this.$store.state.count); //0
  }
};
</script>