import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import components from "@/components/UI";
import { IonicVue } from "@ionic/vue";
import router from "@/router/router";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).use(IonicVue).mount("#app");
