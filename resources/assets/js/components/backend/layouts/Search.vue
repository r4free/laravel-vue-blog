<template>
	<form @submit.prevent="search()">
		<div class="input-group">
			<input type="text" class="form-control" v-model="filter">
			<a class="input-group-addon " href="#" @click.prevent="search()">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
			</a>
		</div>
	</form>
</template>

<script>
	export default {
		name: 'Search',

		data () {
			return {
				filter:'',
			}
		},
		methods:{
			search(){
				this.$emit('search',this.filter);
			}
		},
		
	}
</script>

<style lang="css" scoped>
</style>