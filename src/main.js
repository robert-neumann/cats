import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use({
  install(Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: "https://api.thecatapi.com/v1/images/search"
    });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
