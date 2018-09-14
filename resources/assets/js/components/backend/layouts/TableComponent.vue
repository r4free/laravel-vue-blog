<template>
	<div class="table-responsive">
					<table class="table table-hover table-condensed">
						<thead>
							<tr>
								<th v-for="field in fields" class="text-capitalize">{{field}}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in data">
								
								<th v-for="(field,index) in fields">{{item.field[index]}}</th>
								<!-- <td>
									<div class="btn-group">
										<router-link  class="btn btn-warning" :to="{name:'admin.products.edit',params:{id:product.id}}">Editar</router-link>
										<a  class="btn btn-danger" @click.prevent="deleteProduct(product.id)">Deletar</a>
									</div>
								</td> -->
							</tr>
						</tbody>
					</table>
				</div>
</template>

<script>
export default {

  name: 'TableComponent',
  props:{
  		fields:{
  			type:Array,
  		},
  		data:{
  			type:Array
  		}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>