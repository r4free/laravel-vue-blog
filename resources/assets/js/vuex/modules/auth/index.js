export default {
  state: {
    me: {},
    authenticated: false,
    url: "admin.index"
  },
  mutations: {
    LOGIN(state, form) {
      state.me = form.user;
      state.authenticated = true;
    },
    LOGOUT(state) {
      state.me = {};
      state.authenticated = false;
    },
    URL_BACK(state, url) {
      state.url = url;
    }
  },
  actions: {
    login(context, form) {
      return axios.post(`${this.config.api}/auth`, form).then(response => {
        localStorage.setItem("_token", response.data.token);
        context.commit("LOGIN", response.data);
        context.commit("URL_BACK", "admin.index");
      });
    },
    logout(context) {
      context.commit("LOGOUT");
      localStorage.removeItem("_token");
    },
    checkLogin(context) {
      const _token = localStorage.getItem("_token");
      if (_token) {
        return axios.get("api/v1/me", _token).then(response => {
          context.commit("LOGIN", response.data);
        });
      }
    },
    signUp(context, data) {
      return axios.post(`${this.config.api}/signup`, data).then(response => {
        localStorage.setItem("_token", response.data.token);
        context.commit("LOGIN", response.data);
      });
    }
  }
};
