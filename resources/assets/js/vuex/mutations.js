export default{
	PRELOADER(state){
		state.preloader = !state.preloader
	},
	SET_MODULE(state,module){
		state.module = module
	},
	ITEMS(state,items){
		state[state.module] = items.data
	},	
}