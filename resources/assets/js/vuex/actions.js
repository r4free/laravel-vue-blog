export default {
  loadItems(context, params, url, mutation) {
    return axios
      .get(
        `${this.config.api}/${url}?page=${params.page}&filter=${params.filter}`
      )
      .then(response => {
        // context.commit(this.state.module.toUpperCase(),response.data)
        context.commit(mutation.captalize(), response);
        return response;
      });
  },
  getItem(context, id, url, mutation) {
    return axios.get(`${this.config.api}/${url}/${id}`);
  },
  createItem(context, item, url, mutation) {
    return axios.post(`${this.config.api}/${url}`, item);
  },
  updateItem(context, item, url, mutation) {
    return axios.put(`${this.config.api}/${url}/${item.id}`, item);
  },
  deleteItem(context, id, url, mutation) {
    return axios.delete(`${this.config.api}/${url}/${id}`);
  },

  setModule(context, module) {
    context.commit("SET_MODULE", module);
  },
  preloader(context) {
    context.commit("PRELOADER");
  }
};
