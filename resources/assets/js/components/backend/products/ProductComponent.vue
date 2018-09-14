<template>
	<div >
		<div class="row">
			<div class="col-md-9">
				<search @search="search"></search>
			</div>
			<div class="col-md-3">
				<a href="#" @click="createItem()"  class="btn btn-info">Novo</a> 
			</div>
			<div class="col-md-12">
				<div class="table-responsive">
					<table class="table table-hover table-condended" >
						<thead>
							<tr>
								<th>Image</th>
								<th>Nome</th>
								<th>Descrição</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="product in products">
								<td>
									<img :src="`/storage/products/${product.image}`" alt="" class="img-responsive"  v-if="product.image">
								</td>
								<td>{{product.name}} </td>
								<td>{{`${product.description.substring(1,30)}..`}}</td>
								<td>
									<div class="btn-group" >
										<a class="btn btn-warning" @click.prevent="editItem(product.id)">Editar</a>
										<a class="btn btn-danger" @click.prevent="deleteItem(product.id)">Apagar</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<pagination	:response="$store.state.product.products" @changePage="changePage"></pagination>
			</div>
		</div>
		<modal :name="`modal-${module}`" :adaptive="true" height="auto" @closed="this.edit =''" :scrollable="true">
			<div class="col-md-12">
				<form-component  @submited="submited" :modal="modal" :edit="edit" ></form-component>
			</div>

		</modal>
	</div>
</template>
<script>
import Model from "../masters/Model";

import FormComponent from "./FormComponent";

export default {
  extends: Model,
  data() {
    return {
      module: "product",
      modal: true
    };
  },
  computed: {
    products() {
      return this.$store.state.product.products.data;
    }
  },
  methods: {
    submited() {
      // this.loadItems();
      this.hideModal(`modal-${this.module}`);
    }
  },
  components: {
    FormComponent
  },
  mounted() {
    // Echo.channel("product").listen("ProductStore", e => {
    //   this.$snotify.warning("Produto novo foi cadastrado");
    //   this.loadItems();
    // });
  }
};
</script>
<style lang="scss" scoped>
img {
  height: 33px;
}
</style>

