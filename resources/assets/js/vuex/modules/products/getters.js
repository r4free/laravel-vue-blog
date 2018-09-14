export default {
	getProducts(state){
		return state.products
	},
	getProduct:(state)=>(id)=>{
		alert()
		state.products.filter(product =>{
			return product.id == id
		});
		
	}
}