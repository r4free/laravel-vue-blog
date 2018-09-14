<template>
	<form  @submit.prevent="submit" role="form">
		<legend>Formulário de categoria {{$route.id}}</legend>
		<div class="form-group" :class="{'has-error':errors.name}">
			<label for="">Nome</label>
			<input type="text" class="form-control" id="" placeholder="Nome da categoria" v-model="item.name" id="name" autofocus="autofocus" >
			<span v-if="errors.name" class="text-danger">	{{errors.name[0]}}</span>
		</div>
		<button type="submit" class="btn btn-primary">Enviar</button>
	</form>
</template>

<script>
	import Model from '../masters/Model'
	export default {
		extends:Model,
		data(){
			return{
				module:'Category'
			}
		}
	}


</script>

<style lang="css" scoped>
</style>