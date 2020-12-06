<template>
  <div class="question">
    <div class="main">问题：{{ questionObj.title }}</div>
    <div class="other">
      <!-- :title 鼠标移上去显示完整的文字 -->
      <div
        v-for="other in otherQuestionList"
        :key="other.id"
        :class="other.type"
        @click="handleClick(other.id)"
        :title="other.title"
      >{{ other.title }}</div>
      <!-- <div class="prev" :title="questionObj.prev">{{  questionObj.prev }}</div> -->
      <!-- <div class="next" :title="questionObj.next">{{ questionObj.next }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionObj: []
    };
  },
  mounted() {
    // this.getData();
  },
  computed: {
    otherQuestionList() {
      const arr = [];
      if (this.questionObj.prev) {
        const { prev, prevId } = this.questionObj;
        arr.push({
          type: "prev",
          title: prev,
          id: prevId
        });
      }
      if (this.questionObj.next) {
        const { next, nextId } = this.questionObj;
        arr.push({
          type: "next",
          title: next,
          id: nextId
        });
      }
      return arr;
    }
  },
  methods: {
    handleClick(id) {
      const { name } = this.$route;
      this.$router.push({
        // name: "question",
        name,
        params: {
          id
        }
      });
    },
    getData() {
      const { id } = this.$route.params;
      this.$axios.get(`question/${id}`).then(res => {
        this.questionObj = res;
        //   console.log(this.questionObj);
      });
    }
  },
  watch: {
    $route: {
      handler() {
        this.getData();
      },
      //  立即执行
      immediate: true
    }
  }
};
</script>
<style scoped>
.main {
  margin-bottom: 400px;
}
.prev {
  float: left;
  cursor: pointer;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.prev:hover,
.next:hover {
  text-decoration: underline;
  color: #3385ff;
}
.next {
  float: right;
  cursor: pointer;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>