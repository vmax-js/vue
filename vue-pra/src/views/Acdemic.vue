<template>
  <div>
    <ul>
      <!-- 跳转 -->
      <router-link
        tag="li"
        v-for="question in questionsList"
        :key="question.id"
        :to="{ name:'question',params:{ id: question.id } }"
      >{{ question.title }}</router-link>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionsList: ""
    };
  },
  mounted() {
    //   console.log(this.$axios);
    this.$axios.get("question").then(res => {
      //   console.log(res.data);
      this.questionsList = res;
      // console.log(res);
    });
  }
};
</script>

<style scoped>
li {
  margin-bottom: 15px;
  cursor: pointer;
}
li:hover {
  text-decoration: underline;
  color: #3385ff;
}
</style>