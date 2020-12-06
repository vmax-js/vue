<template>
  <button @click="handle">{{ btnText }}</button>
</template>

<script>
import auth from "../utils/auth";
export default {
  data() {
    return {
      isLogin: auth.isLogin()
    };
  },
  methods: {
    handle() {
      if (this.isLogin) {
        // 取消登陆
        auth.cancelLogin();
      } else {
        auth.login();
        this.isBack(); 
      }
      this.isLogin = !this.isLogin;
    },
    isBack() {
      const isGoBack = window.confirm("登陆成功,要回到原来的页面吗？");
      if (isGoBack) {
        this.$router.go(-1);
      }
    }
  },
  computed: {
    btnText() {
      return this.isLogin ? "取消登陆" : "登陆";
    }
  }
};
</script>

