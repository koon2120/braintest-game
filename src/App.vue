<script setup>
import { onMounted, ref } from 'vue';

// page = start, ingame
const pageState = ref('start')

// mainNumber for show , numberList for store
const mainNumber = ref(0)
const numberList = ref([])

// numberNo use Ingame page , numberNoLimit set in start page
const numberNo = ref(0)
const numberNoLimit = ref(3)

//question and answer
const isQuestion = ref(false)
const isUserAnswer = ref(false)
const userAnswer = ref('')
const verifyStatus = ref(0)

// player level
const playerLevel = ref(1)

// player level for show in start page
const playerLevel3 = ref(1)
const playerLevel5 = ref(1)
const playerLevel10 = ref(1)

// เมื่อผู้เล่นกดเล่น
function onPlayerPlay(number) {
  if (number == 3) {
    numberNoLimit.value = 3
    playerLevel.value = playerLevel3.value
  }else if (number == 5) {
    numberNoLimit.value = 5
    playerLevel.value = playerLevel5.value
  }else if (number == 10) {
    numberNoLimit.value = 10
    playerLevel.value = playerLevel10.value
  }
  pageState.value = 'ingame'
}

// เมื่อผู้เล่นกดรีเซ็ตหรือต่อไปเมื่อได้รับผลลัพธ์ของคำตอบ
function ResetProcress() {
  userAnswer.value = ''
  verifyStatus.value = 0
  isQuestion.value = false
  numberNo.value = 0;
  numberList.value = []
  NextProcress()
}

// เมื่อผู้เล่นกดต่อไป มีการเช็คว่าไปต่อหรือเข้าสู่คำถาม
function NextProcress() {
  if (numberNo.value != numberNoLimit.value && !isQuestion.value) {
    isQuestion.value = false
    isUserAnswer.value = false
    numberNo.value += 1;
    mainNumber.value = Math.floor(Math.random() * (9 + (10 * (playerLevel.value - 1)))) + 1;
    numberList.value.push(mainNumber.value)
  } else if (numberNo.value == numberNoLimit.value) {
    isQuestion.value = true
    numberNo.value = Math.floor(Math.random() * numberNoLimit.value) + 1;
    mainNumber.value = "?";
    console.log(numberList.value)
  }
}

// ตรวจสอบคำตอบ
function AnswerVerify() {
  mainNumber.value = userAnswer.value
  isUserAnswer.value = true
  if (String(numberList.value[numberNo.value - 1]) === String(userAnswer.value)) {
    verifyStatus.value = 1
    playerLevel.value += 1
    if (numberNoLimit.value == 3) {
      localStorage.setItem('player-level-3',String(playerLevel.value))
    }else if (numberNoLimit.value == 5) {
      localStorage.setItem('player-level-5',String(playerLevel.value))
    }else if (numberNoLimit.value == 10) {
      localStorage.setItem('player-level-10',String(playerLevel.value))
    }
  } else {
    verifyStatus.value = 2
  }
}

// แปลง verifyStatus เป็นข้อความสำหรับแสดงผล
function VerifyMessage() {
  if (verifyStatus.value == 1) {
    return 'ตอบถูกต้อง!!!'
  } else if (verifyStatus.value == 2) {
    return 'ตอบผิดนะ :)'
  } else {
    return 'ไม่ทราบ'
  }
}

function onPlayerResetLevel(number) {
  if (number == 3) {
    localStorage.setItem('player-level-3',"1")
    playerLevel3.value = 1
  }else if (number == 5) {
    localStorage.setItem('player-level-5',"1")
    playerLevel5.value = 1
  }else if (number == 10) {
    localStorage.setItem('player-level-10',"1")
    playerLevel10.value = 1
  }
}

// เมื่อ Vue App พร้อมใช้งาน
onMounted(() => {
  if (localStorage.getItem('player-level-3')) {
    playerLevel3.value = parseInt(localStorage.getItem('player-level-3'))
  }else {
    localStorage.setItem('player-level-3',"1")
    playerLevel3.value = 1
  }
  if (localStorage.getItem('player-level-5')) {
    playerLevel5.value = parseInt(localStorage.getItem('player-level-5'))
  }else {
    localStorage.setItem('player-level-5',"1")
    playerLevel5.value = 1
  }
  if (localStorage.getItem('player-level-10')) {
    playerLevel10.value = parseInt(localStorage.getItem('player-level-10'))
  }else {
    localStorage.setItem('player-level-10',"1")
    playerLevel10.value = 1
  }
  NextProcress()
})
</script>

<template>
  <div class="container mx-auto font-sans text-rose-950">
    <div v-if="pageState == 'start'" class="flex flex-col items-center mt-10 mb-10">
      <div class="text-center">
        <h1 class="text-2xl lg:text-5xl font-bold">เกมทายตัวเลขสำหรับเล่นเพลินๆ</h1>
        <p class="text-md font-medium">version 1.2</p>
      </div>
      <div class="flex flex-col text-center mt-8">
        <div class="bg-green-200 px-20 py-8 m-2 rounded-lg border-2 border-green-800">
          <h2 class="text-3xl font-bold">3 หมายเลข</h2>
          <p class="mb-2">สำหรับเล่นง่ายๆ ชิวๆ เพลินๆ สบายๆ</p>
          <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerLevel3 }}</p>
          <div class="flex flex-row gap-x-1 justify-center">
            <button @click="onPlayerPlay(3)" class="bg-green-800 text-green-100 font-medium px-3 py-1 rounded-xl">เล่น</button>
            <button @click="onPlayerResetLevel(3)" class="bg-green-800 text-green-100 font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
          </div>
        </div>
        <div class="bg-yellow-200 px-20 py-8 m-2 rounded-lg border-2 border-yellow-800">
          <h2 class="text-3xl font-bold">5 หมายเลข</h2>
          <p class="mb-2">ระดับปานกลาง สำหรับความท้าทายที่ไม่ได้ยากเกินไป</p>
          <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerLevel5 }}</p>
          <div class="flex flex-row gap-x-1 justify-center">
            <button @click="onPlayerPlay(5)" class="bg-yellow-800 text-yellow-100 font-medium px-3 py-1 rounded-xl">เล่น</button>
            <button @click="onPlayerResetLevel(5)" class="bg-yellow-800 text-yellow-100 font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
          </div>
        </div>
        <div class="bg-red-200 px-20 py-8 m-2 rounded-lg border-2 border-red-800">
          <h2 class="text-3xl font-bold">10 หมายเลข</h2>
          <p class="mb-2">ระดับยาก สำหรับความท้าทายที่สูง</p>
          <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerLevel10 }}</p>
          <div class="flex flex-row gap-x-1 justify-center">
            <button @click="onPlayerPlay(10)" class="bg-red-800 text-red-100 font-medium px-3 py-1 rounded-xl">เล่น</button>
            <button @click="onPlayerResetLevel(10)" class="bg-red-800 text-red-100 font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="pageState == 'ingame'" class="flex flex-col items-center mt-20 mb-20">
      <div class="mb-3">
        <p class="bg-green-200 text-green-900 px-2 py-1 rounded-xl text-xs font-medium">LEVEL {{ playerLevel }}</p>
      </div>
      <div class="mb-3">
        <p v-if="!isQuestion" class="font-semibold text-xl">หมายเลขที่ {{ numberNo }}</p>
        <p v-else class="font-semibold text-xl"><span class="underline">คำถาม</span> หมายเลขที่ {{ numberNo }}
          คือเลขอะไร?</p>
      </div>
      <div class="text-center mt-5 mb-6">
        <h1 v-if="!isQuestion" class="text-8xl font-bold text-rose-800">{{ mainNumber }}</h1>
        <input v-else-if="!isUserAnswer" type="text"
          class="rounded-lg text-4xl lg:text-8xl font-bold w-52 text-center outline-none bg-zinc-100 text-zinc-700 border-zinc-400 border-2 py-1"
          v-model="userAnswer" placeholder="???">
        <h1 v-if="isUserAnswer" class="text-4xl lg:text-8xl font-bold"
          :class="{ 'text-red-600': verifyStatus == 2, 'text-green-600': verifyStatus == 1 }">{{ VerifyMessage() }}</h1>
      </div>
      <div class="flex flex-row gap-x-2 mb-10">
        <button v-if="!verifyStatus" @click="ResetProcress"
          class="text-lg px-3 py-1 font-semibold bg-yellow-700 text-zinc-50 rounded-xl">เริ่มใหม่</button>
        <button v-else @click="ResetProcress"
          class="text-lg px-3 py-1 font-semibold bg-yellow-700 text-zinc-50 rounded-xl"
          :class="{ 'bg-red-700': verifyStatus == 2, 'bg-green-700': verifyStatus == 1 }">{{ verifyStatus == 1 ? 'ไปต่อ' :
          'เริ่มใหม่' }}</button>
        <button v-if="!isQuestion" @click="NextProcress"
          class="text-lg px-3 py-1 font-semibold bg-lime-700 text-zinc-50 rounded-xl">ต่อไป</button>
        <button v-else-if="isQuestion && !verifyStatus" @click="AnswerVerify"
          class="text-lg px-3 py-1 font-semibold bg-red-700 text-zinc-50 rounded-xl">ตรวจคำตอบ</button>
      </div>
      <div class="bg-rose-200 p-5 m-5 rounded-lg lg:w-1/2">
        <h2 class="font-bold text-xl mb-2">How To Play</h2>
        <p>สำหรับวิธีการเล่นนั้นง่ายมากๆ เพียงแค่คุณจำตัวเลขบนหน้าจอแล้วกด "ต่อไป"
          เพื่อรับเลขถัดไปมาแสดงผลและจำตัวเลขเหล่านี้ไปเรื่อยจนกว่าจะครบ 10 ตัวเลข เมื่อครบแล้วคุณจะได้รับคำถามอย่างเช่น
          "หมายเลขที่ 5 คือเลขอะไร?" คุณจะต้องตอบให้ถูกต้อง!</p>
      </div>
    </div>
  </div>
  <p class="fixed bottom-1 left-2 font-normal text-sm text-rose-800 opacity-70">พบบัค หรือปัญหาใดๆ โปรดแจ้งที่ <a
      href="mailto:me@koon2120.work" class="font-medium text-rose-900 hover:text-zinc-800">me@koon2120.work</a></p>
</template>
