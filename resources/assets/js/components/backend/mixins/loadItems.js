export default{
	methods:{
		loadItems(action){
			this.$store.dispatch(`load${this.module.capitalize()}`,{filter:this.filter,page:this.page}).then(response=>{
				this.response = response.data
			})
		}
	}
}