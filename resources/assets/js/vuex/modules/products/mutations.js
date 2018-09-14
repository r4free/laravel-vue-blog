export default {
	LOAD_PRODUCTS(state,products){
		state.products = products.data
	},
	ADD_PRODUCT(state,product){
		state.products.splice(0,0,product)
	}
}