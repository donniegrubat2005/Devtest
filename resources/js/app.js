import Vue from "vue";
import router from "./routes";
import App from "./components/App.vue";

import "./assets/styles.css";

import "jquery/src/jquery";
import "popper.js";
import "startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js";
import "startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js";
import "startbootstrap-sb-admin-2/js/sb-admin-2.min.js";
import "./assets/js/datatables.min";

require("./bootstrap");

import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
window.toastr = require("toastr");
//window.Vue = require('vue');

Vue.use(VueToastr2);

const app = new Vue({
    router: router,
    components: { App },
    render: h => h(App)
}).$mount("#app");
