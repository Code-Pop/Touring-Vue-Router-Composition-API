import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
const GStore = reactive({ flashMessage: "" });

const app = createApp(App);

app.use(router).provide("GStore", GStore);

app.mount("#app");
