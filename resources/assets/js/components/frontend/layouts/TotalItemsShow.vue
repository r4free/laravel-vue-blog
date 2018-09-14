<template>
<div class="shop-show">
    <span class="sorting-show"> Exibir:</span>
    <select @change="changeShow" v-model="total">
		<option value="3">3</option>
		<option value="6">6</option>
		<option value="9" >9</option>
		<option value="12">12</option>
	</select>
</div>
</template>
<script>
export default {
  data() {
    return {
      total: "9"
    };
  },
  methods: {
    changeShow() {
      this.$emit("changeShow", this.total);
    }
  }
};
</script>

