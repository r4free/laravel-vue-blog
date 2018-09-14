<template>
		<div class="row">
			<div class="col-md-9">
				<search @search="search"></search>
			</div>
			<div class="col-md-3">
				<router-link :to="{name:'admin.category.create'}" class="btn btn-default">Nova</router-link>
			</div>
			<div class="col-md-12">
				<div class="table-responsive">
					<table class="table table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>Nome</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="category in categories"> 
								<td>{{category.id}}</td>
								<td>{{category.name}}</td>
								<td width="300">
									<div class="btn-group">
										<button type="button" class="btn btn-warning" @clidk="editItem(category.id)">Editar</button>
										<button type="button" class="btn btn-danger" @click="deleteItem(category.id)">Deletar</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<pagination	:response="response" @changePage="changePage"></pagination>
		</div>
</template>

<script>
	import Model from '../masters/Model'
	export default {

		name: 'CategoryComponent',
		extends:Model,
		data () {
			return {
				module:'category',
				response:{
					
				}
			}
		},
		computed:{
			categories(){
				return this.$store.state.category.categories
			}
		}
	}
</script>

<style lang="css" scoped>
</style>