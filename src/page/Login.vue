<template>
  <div class="login">
    <h3>登录</h3>
    <div class="form">
     <p><span>账户名：</span><input type="text"></p>
     <p><span>密码</span><input type="password"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
  };

</script>

<style scoped>
.login{
  width: 80%;
  margin: 30px auto;
  box-shadow: 0 0 1px #ddd;
  text-align: center;
  border-radius: 5px;
}

</style>
