import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import routes from "./routes/index";
import VueSweetalert2 from "vue-sweetalert2";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.scss";
import "./assets/scss/main.scss";
import "../src/setup/veeValidate";
import "sweetalert2/dist/sweetalert2.min.css";
import "bootstrap-icons/font/bootstrap-icons.scss";
// import MercadoPago from 'mercadopago';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// MercadoPago.configurations.setAccessToken('APP_USR-5692623734442597-071318-5317a02cee5dfbe53d8d2ca4713b7578-238788393');

createApp(App).use(routes).use(VueSweetalert2).use(pinia).mount("#app");
