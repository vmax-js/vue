<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello son"
    };
  }
};
</script>

<style scoped>
p {
    background-color: blue;
}
</style>