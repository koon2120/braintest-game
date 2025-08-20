import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay,faHouse,faRotateLeft,faArrowRight,faTriangleExclamation,faCircleCheck,faCircleXmark,faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { i18n } from "./i18n";

library.add(faPlay,faHouse,faRotateLeft,faArrowRight,faTriangleExclamation,faCircleCheck,faCircleXmark,faRotateRight);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(i18n)
app.mount("#app");