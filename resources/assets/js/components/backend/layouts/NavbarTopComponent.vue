<template>
    <nav class="navbar navbar-default navbar-cls-top navbar-fixed-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">Binary admin</a> 
            </div>
            <div style="color: white;
            padding: 15px 50px 5px 50px;
            float: right;
            font-size: 16px;"> Bem vindo, {{user.name}} &nbsp; <a href="#" class="btn btn-danger square-btn-adjust" @click.prevent="logout()">Logout</a> </div>
        </nav>  
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.me;
    }
  }
};
</script>

