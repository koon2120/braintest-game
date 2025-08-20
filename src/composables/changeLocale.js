import { i18n } from '../i18n'

export default function changeLocale(locale) {
    i18n.global.locale = locale
    localStorage.setItem('language',locale)
}