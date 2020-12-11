<template>
  <div class="studentadd">
    <div class="title">添加学生：</div>
    <div class="name">
      姓名：
      <input type="text" v-model="student.name" />
    </div>
    <div class="age">
      年龄：
      <input type="text" v-model="student.age" />
    </div>
    <button @click="handleClick">添加</button>
  </div>
</template>
<script>
export default {
    data(){
        return {
            student:{
                age:'',
                name:''
            }
        }
    },
    methods:{
        handleClick(){
            this.$store.state.studentList.push(this.student);
        }
    }
}
</script>
<style scoped>
.studentadd,.title,.name,.age{
    margin-bottom: 10px;
}
</style>