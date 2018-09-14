import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import category from "./modules/categories";
import product from "./modules/products";
import auth from "./modules/auth";
import cart from "./modules/cart";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default new Vuex.Store({
  modules: {
    category,
    product,
    auth,
    cart
  },
  state: {
    preloader: false,
    module: ""
  },
  mutations,
  actions,
  getters
});
