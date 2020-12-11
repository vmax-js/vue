<template>
  <div class="studentList">
    <div class="title">学生列表：</div>
    <ul>
      <template v-if="studentList.length">
        <li
          v-for="student in studentList"
          :key="student.name + Math.random()"
        >姓名：{{ student.name }} 年龄：{{ student.age }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["studentList"])
  }
};
</script>

<style scoped>
.studentList,
.title,
li {
  margin-bottom: 10px;
}
</style>