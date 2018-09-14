export default {
  loadProduct(context, params) {
    console.log(params);

    return axios(
      `${this.config.api}/product?page=${params.page}&filter=${
        params.filter
      }&total=${params.total}`
    ).then(response => {
      context.commit("LOAD_PRODUCTS", response);
      return response;
    });
  },
  getProduct(context, id) {
    return axios.get(`${this.config.api}/product/${id}`);
  },
  createProduct(context, product) {
    return axios.post(`${this.config.api}/product`, product);
  },
  updateProduct(context, product) {
    product.append("_method", "PUT");
    return axios.post(
      `${this.config.api}/product/${product.get("id")}`,
      product
    );
  },
  deleteProduct(context, id) {
    return axios.delete(`${this.config.api}/product/${id}`);
  },
  teste() {
    alert("");
  }
};
