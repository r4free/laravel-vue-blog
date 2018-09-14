<template>
	<ul class="pagination">

		<li v-if="response.last_page>1">
			<a href="#" @click.prevent="changePage(response.current_page>1?response.current_page-1:response.current_page)">
				&laquo;
			</a>
		</li>

		<li>
			<a href="#" @click.prevent="changePage(response.fisrt_page)" v-if="response.last_page>1">
				Primeiro
			</a>
		</li>

		<li v-for="page in response.last_page">
			<a href="#" @click.prevent="changePage(page)">{{page}}</a>
		</li>

		<li v-if="response.last_page>1">
			<a href="#" @click.prevent="changePage(response.last_page)">
				Último
			</a>
		</li>

		<li v-if="response.last_page>1">
			<a href="#" @click.prevent="changePage(response.current_page<response.last_page?response.current_page+1:response.current_page)">
				&raquo;
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Pagination',
		props:{
				response:{}	
		},
		methods:{
			changePage(page){
				this.$emit('changePage',page)
			}
		},
		data(){
			return{

			}
		}
	}
</script>

<style lang="css" scoped>
</style>