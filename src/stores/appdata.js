import { ref } from "vue";

const appData = ref({
    pageState: 'start', // page = start, ingame, confirm
    loading: true,
    language: ''
})

export default appData