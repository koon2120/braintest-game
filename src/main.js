import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlay,faHouse,faRotateLeft,faArrowRight,faTriangleExclamation,faCircleCheck,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay,faHouse,faRotateLeft,faArrowRight,faTriangleExclamation,faCircleCheck,faCircleXmark);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");
