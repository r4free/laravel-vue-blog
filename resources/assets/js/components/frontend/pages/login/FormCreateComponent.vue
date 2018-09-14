<template>
<div class="login-content login-margin">
    <h2 class="login-title">create a new account</h2>
    <p>Create your own Unicase account.</p>
    <form action="#" @submit.prevent="signUp()">
        <label>Nome</label>
        <input type="text" v-model="formData.name" />
        <span class="text-danger clearfix">
            <b v-for="(e,index) in errors.name" :key="index">{{e}}</b>
        </span>
        <label>Email Address</label>
        <input type="text" v-model="formData.email" />
        <span class="text-danger clearfix">
            <b v-for="(e,index) in errors.email" :key="index">{{e}}</b>
        </span>
        <label>Password</label>
        <input type="password" v-model="formData.password" />
        <span class="text-danger clearfix">
            <b v-for="(e,index) in errors.password" :key="index">{{e}}</b>
        </span>
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
      errors: {},
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signUp() {
      this.$store
        .dispatch("signUp", this.formData)
        .then(() => {
          this.$router.push({
            name: this.$store.state.auth.url
          });
        })
        .catch(e => {
          console.log(e.response);
          this.errors = e.response.data.errors;
          setTimeout(() => (this.error = false), 2000);
        });
    }
  }
};
</script>
