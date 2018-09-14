export default {
  state: {
    products: []
  },
  mutations: {
    CART_ADD_PRODUCT(state, product) {
      state.products.push(product);
    },
    REMOVE_PRODUCT(state, product) {
      let index = state.products.indexOf(product);
      state.products.splice(index, 1);
    }
  },
  actions: {
    cartAddProduct(context, product) {
      context.commit("CART_ADD_PRODUCT", product);
    },
    removeProduct(context, product) {
      context.commit("REMOVE_PRODUCT", product);
    }
  }
};
