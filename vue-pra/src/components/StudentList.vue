<template>
  <div class="studentList">
    <div class="studentLength">学生总数：{{ studentLength }}</div>
    <div class="title">学生列表：</div>
    <ul>
      <template v-if="studentList.length">
        <li
          v-for="student in studentList"
          :key="student.name + Math.random()"
        >姓名：{{ student.name }} 年龄：{{ student.age }}</li>
      </template>
    </ul>
    <div class="title">未成年学生列表：</div>
    <ul>
      <template v-if="studentJuveniles.length">
        <li
          v-for="student in studentJuveniles"
          :key="student.name + Math.random()"
        >姓名：{{ student.name }} 年龄：{{ student.age }}</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["studentList"]),
    ...mapGetters(["studentLength","studentJuveniles"])
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