<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<form-component :create="true"></form-component>
			</div>
		</div>
	</div>
</template>

<script>
	import FormComponent from './FormComponent'
	export default {

		name: 'CreateProductComponent',

		data () {
			return {

			}
		},
		components:{
			FormComponent
		},

	}
</script>

<style lang="css" scoped>
</style>