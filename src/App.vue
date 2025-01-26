<script setup>
import appData from './stores/appdata';
import gameData from './stores/gamedata';
import playerData from './stores/playerdata';
import AnswerVerify from './composables/AnswerVerify'
import NextProcress from './composables/NextProcress'
import onPlayerPlay from './composables/onPlayerPlay'
import onPlayerResetLevel from './composables/onPlayerResetLevel'
import onPlayerResetLevelConfirm from './composables/onPlayerResetLevelConfirm'
import ResetProcress from './composables/ResetProcress'
import { onMounted } from 'vue';
import StartPage from './components/startPage.vue';
import InGamePage from './components/inGamePage.vue';
import ConfirmPage from './components/confirmPage.vue';

onMounted(() => {
  if (localStorage.getItem("player-level-3")) {
    playerData.value.level3 = parseInt(
      localStorage.getItem("player-level-3")
    );
  } else {
    localStorage.setItem("player-level-3", "1");
    playerData.value.level3 = 1;
  }
  if (localStorage.getItem("player-level-5")) {
    playerData.value.level5 = parseInt(
      localStorage.getItem("player-level-5")
    );
  } else {
    localStorage.setItem("player-level-5", "1");
    playerData.value.level5 = 1;
  }
  if (localStorage.getItem("player-level-10")) {
    playerData.value.level10 = parseInt(
      localStorage.getItem("player-level-10")
    );
  } else {
    localStorage.setItem("player-level-10", "1");
    playerData.value.level10 = 1;
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
