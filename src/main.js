import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";
import store from "./store";
import VueSweetAlert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18nPlugin from "./plugins/i18n";

const i18nStrings = {
  en: {
    hi: "Hello!",
  },
  ko: {
    hi: "안녕하세요",
  },
};

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.use(VueSweetAlert2);
app.use(i18nPlugin, i18nStrings);
app.use(store);
app.mount("#app");
