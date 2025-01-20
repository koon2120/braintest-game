<script setup>
import { onMounted, ref, watch } from 'vue';
const isQuestion = ref(false)
const isUserAnswer = ref(false)
const mainNumber = ref(0)
const numberList = ref([])
const numberNo = ref(0)
const userAnswer = ref('')
const verifyStatus = ref(0)

function ResetProcress() {
  userAnswer.value = ''
  verifyStatus.value = 0
  isQuestion.value = false
  numberNo.value = 0;
  numberList.value = []
  NextProcress()
}

function NextProcress() {
  if (numberNo.value != 10 && !isQuestion.value) {
    isQuestion.value = false
    isUserAnswer.value = false
    numberNo.value += 1;
    mainNumber.value = Math.floor(Math.random() * 9) + 1;
    numberList.value.push(mainNumber.value)
  }else if (numberNo.value == 10) {
    isQuestion.value = true
    numberNo.value = Math.floor(Math.random() * 10) + 1;
    mainNumber.value = "?";
  }
}

function AnswerVerify() {
  mainNumber.value = userAnswer.value
  isUserAnswer.value = true
  if (String(numberList.value[numberNo.value-1]) === String(userAnswer.value)) {
    verifyStatus.value = 1
  }else {
    verifyStatus.value = 2
  }
}

function VerifyMessage() {
  if (verifyStatus.value == 1) {
    return 'ถูกต้อง'
  }else if (verifyStatus.value == 2) {
    return 'ผิด'
  }else {
    return 'ไม่ทราบ'
  }
}

watch(userAnswer,(value,oldValue) => {
  if (value.length > 3) {
    userAnswer.value = userAnswer.value.slice(0,3)
  }
})

onMounted(() => {
  NextProcress()
})
</script>

<template>
  <div class="container mx-auto font-sans">
    <div class="flex flex-col justify-center items-center h-screen gap-3">
      <div>
        <p v-if="!isQuestion" class="font-semibold text-xl">หมายเลขที่ {{ numberNo }}</p>
        <p v-else class="font-semibold text-xl"><span class="underline">คำถาม</span> หมายเลขที่ {{ numberNo }} คือเลขอะไร?</p>
      </div>
      <div class="text-center mt-5 mb-3">
        <h1 v-if="!isQuestion" class="text-8xl font-bold">{{ mainNumber }}</h1>
        <input v-else-if="!isUserAnswer" type="text" class="rounded-lg text-4xl lg:text-8xl font-bold w-44 text-center outline-none bg-zinc-200 py-1" v-model="userAnswer" placeholder="???">
        <h1 v-if="isUserAnswer" class="text-4xl lg:text-8xl font-bold" :class="{'text-red-600':verifyStatus==2,'text-green-600':verifyStatus==1}">{{ mainNumber }} {{ isUserAnswer ? 'คือคำตอบที่'+VerifyMessage() : '' }}</h1>
      </div>
      <div class="flex flex-row gap-x-2 mb-10">
        <button @click="ResetProcress" class="text-lg px-3 py-1 font-medium bg-zinc-900 text-zinc-50 rounded-full">เริ่มใหม่</button>
        <button v-if="!isQuestion" @click="NextProcress" class="text-lg px-3 py-1 font-medium bg-zinc-900 text-zinc-50 rounded-full">ต่อไป</button>
        <button v-else-if="isQuestion && !verifyStatus" @click="AnswerVerify" class="text-lg px-3 py-1 font-medium bg-zinc-900 text-zinc-50 rounded-full">ตรวจคำตอบ</button>
      </div>
      <div class="bg-zinc-200 p-5 m-5 rounded-lg lg:w-1/2">
        <h2 class="font-bold text-xl mb-2">How To Play</h2>
        <p>สำหรับวิธีการเล่นนั้นง่ายมากๆ เพียงแค่คุณจำตัวเองบนหน้าจอแล้วกด "ต่อไป" เพื่อรับเลขถัดไปมาแสดงผล เมื่อครบ 10 ตัวเลขแล้ว คุณจะได้รับคำถามอย่างเช่น "หมายเลขที่ 5 คือเลขอะไร?" คุณจะต้องตอบให้ถูกต้อง เพียงเท่านี้เลยนั่นเอง!</p>
      </div>
    </div>
  </div>
  <p class="fixed bottom-1 left-2 font-normal text-sm text-zinc-500">พบบัค หรือปัญหาใดๆ โปรดแจ้งที่ <a href="mailto:me@koon2120.work" class="font-medium text-zinc-600 hover:text-zinc-800">me@koon2120.work</a></p>
</template>
