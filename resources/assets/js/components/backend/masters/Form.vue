<template>
</template>

<script>
	export default {

		name: 'Form',
		props:{
			edit:null,
			modal:{
				type:Boolean,
				default:false
			}
			
		},

		data () {
			return {
				item:{},
				errors:{},
				createMessage:'Item criado com sucesso',
				editMessage:'Item editado com sucesso',
				errorMessage:'parece que você esqueceu alguma coisa',
			}
		},
		methods:{
			submit(){
				const action = this.edit?`update${this.module.capitalize()}`:`create${this.module.capitalize()}`;
				const message = this.edit?this.editMessage:this.createMessage;
				
				this.$store.dispatch('preloader');

				this.$store.dispatch(action,this.item).then(response=>{
					this.modal?this.$emit('submited'):this.$router.push({name:`admin.${this.$store.state.module}.index`});
					this.$snotify.success(message,'Sucesso!');
					this.edit = null;

				})
				.catch(err=>{

					this.$snotify.error(errorMessage,'Erros!')
					
					this.errors = err.response.data.errors
				})
				.finally(()=>{
					this.$store.dispatch('preloader')
				})
			},
			getItem(){
				
				this.$store.dispatch('preloader');
				
				this.$store.dispatch(`get${this.module.capitalize()}`,this.edit)
				.then(response=>{
					return response.data })
				.then(response=>this.item = response)
				.catch(err=>{
					this.$router.go(-1);
					this.$snotify.error('Item não encontrado','Erro')})
				.finally(()=>{
					this.$store.dispatch('preloader')
				});
			},
			
		},
		created(){

			this.$store.dispatch('setModule',this.module.toLowerCase())

			if(this.edit){
				this.getItem()
			}

		},
	}
</script>

<style lang="css" scoped>
</style>