<template>
<div>
    <div class="breadcrumb-area">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="breadcrumb-list">
							<h1>Login</h1>
							<ul>
								<li><a href="index.html">home</a> <span class="divider">|</span></li>
								<li>Login</li>
							</ul>							
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- breadcrumb-area end -->
		<!-- login-area start -->
		<div class="login-area">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<form-login></form-login>
					</div>
					<div class="col-md-6">
						<form-create></form-create>
					</div>
				</div>
			</div>
		</div>
		<!-- login-area end -->	
</div>
    
</template>
<script>
import FormLogin from "./FormLoginComponent";
import FormCreate from "./FormCreateComponent";

export default {
  components: {
    FormLogin,
    FormCreate
  },
  mounted() {
    if (this.$store.state.auth.authenticated) {
      return router.push({ name: "admin.index" });
    }
  }
};
</script>

