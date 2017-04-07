<template>
  <z-card>
    <p slot='title'>LOGIN</p>
    <div slot='body' class="form">
      <p><span>账户名：</span><input type="text" v-model="userName"></p>
      <p><span>密码：</span><input type="password" v-model="password"></p>
      <p><button class="login" @click = 'login'>登录</button><button class="reg" @click = 'reg'>注册</button></p>
    </div>
  </z-card>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        userName:'',
        password:''
      }
    },
    // sockets () {

    // },
    created() {
      this.$socket.emit('test', '123');
      console.log(this.$options.sockets)
      // this.$store.dispatch('socket_test',{name:123})
    },
    methods: {
      reg () {
        this.$store.dispatch('userReg',{
          userName:this.userName,
          password:this.password
        })
      },
      login () {
        this.$store.dispatch('userLogin',{
          userName:this.userName,
          password:this.password
        })
      }
    }
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
