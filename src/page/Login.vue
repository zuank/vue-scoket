<template>
 <div class="login">
  <mu-card>
    <mu-card-title title="踉跄的小仙女"/>
    <mu-card-text>
     <mu-text-field v-model="userName" label="username" labelFloat/><br/>
     <mu-text-field v-model="password" type='password' label="password" labelFloat/><br/>
    </mu-card-text>
    <mu-card-actions>
     <mu-flat-button @click.native='login' label="login"/>
     <mu-flat-button @click.native='reg' label="reg"/>
   </mu-card-actions>
  </mu-card>
 </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        userName: '',
        password: '',
      };
    },
    // sockets() {
    //
    // },
    created() {
      // this.$socket.emit('test', '123');
      // this.$store.dispatch('socket_test',{name:123})
    },
    methods: {
      reg() {
        this.$store.dispatch('userReg', {
          userName: this.userName,
          password: this.password,
        });
      },
      login() {
        this.$store.dispatch('userLogin', {
          userName: this.userName,
          password: this.password,
        });
      },
    },
  };

</script>

<style lang='less' scoped>
.login {
 padding: 20px;
 text-align: center;
}
</style>
