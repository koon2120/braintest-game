<script setup>
import { onMounted, watch } from 'vue';
import appData from './stores/appdata';
import StartPage from './components/startPage.vue';
import InGamePage from './components/inGamePage.vue';
import ConfirmPage from './components/confirmPage.vue';
import checkUser from './composables/supabase/checkUser'
import setUpScore from './composables/setUpScore';
import setUpLocale from './composables/setUpLocale';
import changeLocale from './composables/changeLocale';

onMounted(async () => {
  await checkUser()
  await setUpScore()
  setUpLocale()
})

watch(appData.value, (value) => {
  if (value.language != localStorage.getItem('language') && value.language != '') {
    changeLocale(value.language)
  }
})
</script>

<template>
  <div class="container mx-auto font-sans text-rose-950">
    <div v-if="appData.pageState == 'start'" class="flex flex-col items-center mt-10 mb-10">
      <StartPage />
    </div>
    <div v-if="appData.pageState == 'ingame'" class="flex flex-col items-center mt-20 mb-20">
      <InGamePage />
    </div>
    <div v-if="appData.pageState == 'confirm'" class="flex flex-col items-center mt-20 mb-20">
      <ConfirmPage />
    </div>
  </div>
</template>
