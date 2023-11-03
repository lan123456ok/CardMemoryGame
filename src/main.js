import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.css";

// createApp(App).mount("#app");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

