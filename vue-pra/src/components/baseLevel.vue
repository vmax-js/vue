
<script>
// <template>
//   <!-- <h1 v-if="level === 1">
//     <slot></slot>
//   </h1>
//   <h2 v-else-if="level === 2">
//     <slot></slot>
//   </h2>
//   <h3 v-else-if="level === 3">
//     <slot></slot>
//   </h3>
//   <h4 v-else-if="level === 4">
//     <slot></slot>
//   </h4>
//   <h5 v-else-if="level === 5">
//     <slot></slot>
//   </h5>
//   <h6 v-else>
//     <slot></slot>
//   </h6> -->
//   <div></div>
// </template>

export default {

  props: {
    level: {
      // 数字类型，必需
      type: Number,
      require: true
    },
  },
  render(createElement){
    //   this.$solts.default 拿到插槽默认 render体现编程能力
    // createElement创建一个虚拟dom vNode
    const vNode = createElement('h'+this.level,this.$slots.default);
    console.log(vNode);
    return vNode;
  }
};
</script>

<style scoped>
</style>