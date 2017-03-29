<template>
  <z-card>
    <p slot='title'>LOGIN</p>
    <div slot='body' class="form">
      <p><span>账户名：</span><input type="text"></p>
      <p><span>密码：</span><input type="password"></p>
      <p><button class="login">登录</button><button class="reg">注册</button></p>
    </div>
  </z-card>
</template>

<script>
  export default {
    name: 'login',
  };

</script>

<style scoped>
.card{
  width: 80%;
  margin: 30px auto;
  text-align: center;
}
.form >p >span {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.form >p >input {
  display: inline-block;
  width: 100px;
  border: 1px solid #ccc;
}
button {
  border: none
}
.login {
  background: #bbb;
  margin: 0 20px;
}
.reg {
  background: #cd34f2;
}
</style>
