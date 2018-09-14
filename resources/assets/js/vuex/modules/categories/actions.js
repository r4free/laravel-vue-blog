export default {
	loadCategory(context,params = {page:null,filter:null}){
		return axios.get(`${this.config.api}/category?page=${params.page}&filter=${params.filter}`).then(response =>{
			context.commit("LOAD_CATEGORIES",response)
			return response
		});	
	},
	getCategory(context,id){
		return axios.get(`${this.config.api}/category/${id}`)
	},
	createCategory(context,	category){
		return axios.post(`${this.config.api}/category`,category);
	},
	updateCategory(context,category){
		return axios.put(`${this.config.api}/category/${category.id}`,category);
	},
	deleteCategory(context,id){
		return axios.delete(`${this.config.api}/category/${id}`);
	}
}