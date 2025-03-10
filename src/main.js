import Vue from "vue";
import { Tabs, TabsItem } from "vuikit/lib/tabs";
import "@vuikit/theme";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import BackToTop from "vue-backtotop";
import vsSelect from "vuesax";
import "vuesax/dist/vuesax.css";
import VueYoutube from "vue-youtube";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BackToTop);
Vue.use(vsSelect);
Vue.use(VueYoutube);

Vue.component("VkTabs", Tabs);
Vue.component("VkTabsItem", TabsItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
