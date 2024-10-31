import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import BaseButton from "./components/BaseButton.vue";
import BaseCalender from "./components/BaseCalender.vue";
import BaseList from "./components/BaseList.vue";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("BaseCalender", BaseCalender);
app.component("BaseList", BaseList);

app.use(router);

app.mount("#app");
