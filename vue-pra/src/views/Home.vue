<template>
  <div class="home">
    首页
    <button @click="handleClick">点击</button>
    <!-- {{ $store.state.count }} -->

    {{ count }}
    {{ doubleCount }}
    {{ addCount(10) }}
    {{ obj }}
    <!-- <input :value="msg" @input="handleInput" /> -->
    <input v-model="msg"/>
    {{ msg }}
    {{ count }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  //   data() {
  //     return {
  //       count: this.$store.state.count
  //     };
  //   },
  computed: {
    //   count(){
    //       return this.$store.state.count;
    //   }
    ...mapState(["count"]),
    ...mapState(["obj"]),
    ...mapGetters(["addCount", "doubleCount"]),
    msg:{
        get(){
            return this.$store.state.msg;
        },
        set(value){
            this.$store.commit('CHANGE_MSG',{value})
        }
    }
  },
  mounted() {
    console.log(this.$store.state.count); //0
  },
  methods: {
    //   ...mapMutations('countIncrement',10),
    handleClick() {
      //   this.$store.commit('countIncrement',10);
      //   this.$store.commit('countIncrement',{num:Math.floor(Math.random() * 100)});
      //   this.$store.commit({
      //     //   mutaion的函数名
      //       type:'COUNT_INCREMENT',
      //     //   数据
      //       num:10
      //   });
    //   this.$store.commit({
    //     //   mutaion的函数名
    //     type: "OBJ_B"
    //   });
      // this.countIncrement();

      this.$store.dispatch('countIncrement').then(res=>{
          alert('actions结束'+res);
      });
    },
    handleInput(e) {
      this.$store.commit("CHANGE_MSG", { value: e.target.value });
    }
  }
};
</script>