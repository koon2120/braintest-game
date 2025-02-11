import { ref } from "vue";

const appData = ref({
    pageState: 'start', // page = start, ingame, confirm
    loading: true,
    version: '2.2'
})

export default appData