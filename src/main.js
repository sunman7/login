import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
// create不会被webpack阻拦
axios.create();
Vue.use(VueAxios, axios);
App.mpType = "app";

const app = new Vue({
    ...App,

});
app.$mount();
