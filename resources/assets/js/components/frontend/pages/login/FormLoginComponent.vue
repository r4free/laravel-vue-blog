<template>
<div class="login-content">
    <h2 class="login-title">Login</h2>
    <p class="text-danger" v-if="error">Parece que as algo deu errado <i class="fa fa-warning"></i></p>
    <p v-else>Hello,Welcome to your account</p>
    <div class="social-sign">
    </div>
    <form action="#" @submit.prevent="login()">
        <label>Email Address</label>
        <input type="text" v-model="formData.email" />
        <label>Password</label>
        <input type="password" v-model="formData.password" />
        <div class="login-lost">
            <span class="log-rem">		<input type="checkbox" />		<label>Remember me!</label>		</span>
            <span class="forgot-login">		<a href="#">Forgot your password?</a>		</span>
        </div>
        <input class="login-sub" type="submit" value="Login" />
    </form>
</div>
</template>
<script>
export default {
  data() {
    return {
      error: false,
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.formData)
        .then(() => {
          this.$router.push({ name: this.$store.state.auth.url });
        })
        .catch(e => {
          this.error = true;
          setTimeout(() => (this.error = false), 2000);
        });
    }
  }
};
</script>

