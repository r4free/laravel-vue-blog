export default {
	getCategories(state){
		return state.category
	},
	filteredCategories:(state)=>(filter)=>{
		if(filter!=""){

			let exp = new RegExp(filter.trim(),'i')

			return state.category.filter((c)=>{
				if(exp.test(c.name) )
					return c
			})

		}else{
			console.log(state.category);
			return state.category
		}
	}
	
}