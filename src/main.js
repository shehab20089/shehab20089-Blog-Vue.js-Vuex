import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

//this is the filter which will allow me to exclude any word from flash or xmen or tester
Vue.filter("textFilter", function(value) {
  return value.replace(RegExp("flash|xmen|tester", "g"), "");
});

//the vue instance of our app
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
