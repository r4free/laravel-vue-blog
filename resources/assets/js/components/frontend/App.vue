<template>
	<div>
		<s-navbar></s-navbar>
		<router-view></router-view>
		<s-footer></s-footer>
	</div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {};
  }
};
</script>

<style lang="css" >
body {
  margin-top: 60px;
}
</style>