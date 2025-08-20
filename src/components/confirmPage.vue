<script setup>
import onPlayerResetLevel from '../composables/onPlayerResetLevel'
</script>

<template>
    <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="3x" class="mb-5" />
    <h1 class="font-bold text-3xl">{{ $t('message.confirmTitle') }}</h1>
    <p class="mb-3">{{ $t('message.confirmDescription') }}</p>
    <div class="flex flex-row gap-x-2">
        <button @click="onPlayerResetLevel(false)"
            class="bg-red-800 text-red-100 hover:opacity-80 transition px-3 py-1 rounded-xl">{{ $t('message.cancel') }}</button>
        <button @click="onPlayerResetLevel(true)"
            class="bg-green-800 text-green-100 hover:opacity-80 transition px-3 py-1 rounded-xl">{{ $t('message.agree') }}</button>
    </div>
</template>