<template>
	<form-component :edit="$route.params.id"></form-component>
</template>

<script>
	import FormComponent from './FormComponent'
export default {
  name: 'EditProductComponent',
  data () {
    return {
    }
  },
  components:{
    	FormComponent
    },
    created(){
    }

}
</script>
<style lang="css" scoped>
</style>