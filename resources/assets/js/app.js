/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import router from "./routes/index.js";

window.Vue = require("vue");

import store from "./vuex/store";
import storeConfig from "./vuex/config";
store.config = storeConfig;

import Snotify from "vue-snotify"; // 1. Import Snotify
// 2. Use Snotify
// You can pass {config, options} as second argument. See the next example or setConfig in [API] section

Vue.use(Snotify);

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

import VModal from "vue-js-modal";

Vue.use(VModal);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
  "preloader",
  require("./components/backend/layouts/Preloader.vue")
);
Vue.component(
  "pagination",
  require("./components/backend/layouts/Pagination.vue")
);
Vue.component("search", require("./components/backend/layouts/Search.vue"));
Vue.component(
  "table-component",
  require("./components/backend/layouts/TableComponent.vue")
);

/*prefix s for components of the site*/
Vue.component(
  "s-navbar",
  require("./components/frontend/layouts/NavbarComponent")
);
Vue.component(
  "s-footer",
  require("./components/frontend/layouts/FooterComponent")
);

const app = new Vue({
  el: "#app",
  router,
  store
});

store.dispatch("checkLogin");

// Echo.channel('product')
// 			.listen('ProductStore', (e) => {
// 				this.$snotify.warning('Produto novo foi cadastrado')
// 				this.$store.dispatch('loadProducts');

// 			});
