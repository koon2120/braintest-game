<script setup>
import appData from '../stores/appdata';
import gameData from '../stores/gamedata';
import playerData from '../stores/playerdata';
import AnswerVerify from '../composables/AnswerVerify'
import NextProcress from '../composables/NextProcress'
import ResetProcress from '../composables/ResetProcress'
</script>

<template>
    <div class="mb-3">
        <p class="bg-green-200 text-green-900 px-2 py-1 rounded-xl text-xs font-medium">LEVEL {{ playerData.levelDefault
            }}</p>
    </div>
    <div class="mb-3">
        <p v-if="!gameData.isQuestion" class="font-semibold text-xl">หมายเลขที่ {{ gameData.numberNo }}</p>
        <p v-else class="font-semibold text-xl"><span class="underline">คำถาม</span> หมายเลขที่ {{ gameData.numberNo }}
            คือเลขอะไร?</p>
    </div>
    <div class="text-center mt-5 mb-6">
        <h1 v-if="!gameData.isQuestion" class="text-8xl font-bold text-rose-800">{{ gameData.mainNumber }}</h1>
        <input v-else-if="!gameData.isUserAnswer" type="text"
            class="rounded-lg text-4xl lg:text-8xl font-bold w-52 text-center outline-none bg-zinc-100 text-zinc-700 border-zinc-400 border-2 py-1"
            v-model="gameData.userAnswer" placeholder="???" autofocus>
        <h1 v-if="gameData.isUserAnswer" class="text-4xl lg:text-8xl font-bold"
            :class="{ 'text-red-600': gameData.verifyStatus == 2, 'text-green-600': gameData.verifyStatus == 1 }">
            <font-awesome-icon :icon="['fas', gameData.verifyStatus == 1 ? 'circle-check' : 'circle-xmark']" /> {{
                gameData.verifyStatus == 1 ? 'ตอบถูกต้อง!' : 'ตอบผิด!' }}
        </h1>
    </div>
    <div class="flex flex-row gap-x-2 mb-10">
        <button @click="appData.pageState = 'start'"
            class="text-lg px-3 py-1 font-semibold bg-sky-700 text-sky-50 hover:opacity-80 transition rounded-xl"><font-awesome-icon
                :icon="['fas', 'house']" /></button>
        <button v-if="!gameData.verifyStatus" @click="ResetProcress"
            class="text-lg px-3 py-1 font-semibold bg-yellow-700 text-yellow-50 hover:opacity-80 transition rounded-xl"><font-awesome-icon
                :icon="['fas', 'rotate-left']" /></button>
        <button v-else @click="ResetProcress"
            class="text-lg px-3 py-1 font-semibold bg-yellow-700 text-yellow-50 hover:opacity-80 transition rounded-xl"
            :class="{ 'bg-red-700': gameData.verifyStatus == 2, 'bg-green-700': gameData.verifyStatus == 1 }"><font-awesome-icon
                :icon="['fas', gameData.verifyStatus == 1 ? 'arrow-right' : 'rotate-left']" /></button>
        <button v-if="!gameData.isQuestion" @click="NextProcress"
            class="text-lg px-3 py-1 font-semibold bg-lime-700 text-lime-50 hover:opacity-80 transition rounded-xl"><font-awesome-icon
                :icon="['fas', 'arrow-right']" /></button>
        <button v-else-if="gameData.isQuestion && !gameData.verifyStatus" @click="AnswerVerify"
            class="text-lg px-3 py-1 font-semibold bg-red-700 text-red-50 hover:opacity-80 transition rounded-xl"><font-awesome-icon
                :icon="['fas', 'arrow-right']" /></button>
    </div>
    <div class="bg-rose-200 p-5 m-5 rounded-lg lg:w-1/2">
        <h2 class="font-bold text-xl mb-2">How To Play</h2>
        <p class="mb-3">สำหรับวิธีการเล่นนั้นง่ายมากๆ เพียงแค่คุณจำตัวเลขบนหน้าจอแล้วกด " <font-awesome-icon
                :icon="['fas', 'arrow-right']" /> "
            เพื่อรับเลขถัดไปมาแสดงผล คุณจะต้องจำตัวเลขเหล่านี้ไปเรื่อยจนกว่าจะครบ {{ gameData.numberNoLimit }} ตัวเลข
            เมื่อครบแล้วคุณจะได้รับคำถามอย่างเช่น
            "หมายเลขที่ {{ gameData.numberNoLimit }} คือเลขอะไร?" คุณจะต้องตอบให้ถูกต้อง หากตอบถูกเลเวลก็จะเพิ่มขึ้น
            และระดับความยากก็จะเพิ่มขึ้นไปด้วย
        </p>
        <p>
            นอกจากนี้คุณยังสามารถเริ่มใหม่ได้หากจำตัวเลขไม่ได้แล้วต้องการเริ่มใหม่ โดยการกด " <font-awesome-icon
                :icon="['fas', 'rotate-left']" /> " หรือต้องการกลับหน้าแรกให้กด " <font-awesome-icon
                :icon="['fas', 'house']" /> " เพื่อกลับไปยังหน้าแรก
        </p>
    </div>
    <div>
        <p class="font-normal text-sm text-rose-800 opacity-70">พบบัค หรือปัญหาใดๆ โปรดแจ้งที่ <a
                href="mailto:me@koon2120.work"
                class="font-medium text-rose-900 hover:text-zinc-800">me@koon2120.work</a>
        </p>
    </div>
</template>