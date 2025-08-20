import { i18n } from "../i18n";
import appData from "../stores/appdata";

export default function setUpLocale() {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language','en')
    }
    i18n.global.locale = localStorage.getItem('language')
    appData.value.language = localStorage.getItem('language')
}