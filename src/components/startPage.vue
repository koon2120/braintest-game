<script setup>
import playerData from '../stores/playerdata';
import onPlayerPlay from '../composables/onPlayerPlay'
import onPlayerResetLevelConfirm from '../composables/onPlayerResetLevelConfirm'
import signOut from '../composables/supabase/signOut'
import signInWithGoogle from '../composables/supabase/signInWithGoogle'
import userData from '../stores/userdata'
import appData from '../stores/appdata';
</script>

<template>
    <div class="flex flex-col items-center text-center">
        <img src="/favicon.png" alt="" class="w-32">
        <p class="text-xl lg:text-2xl font-semibold mx-16">เกมทายตัวเลขสำหรับเล่นเพลินๆ ฝึกการใช้สมอง</p>
        <p class="text-md font-normal">เวอร์ชั่นที่ {{ appData.version }}</p>
    </div>
    <div v-if="appData.loading" class="flex flex-col items-center mt-8 mx-5 gap-y-5">
        <img src="/icon/progress_activity.png" alt="progress_activity" class="w-10 animate-spin">
    </div>
    <div v-if="!userData && !appData.loading"
        class="flex flex-col items-center mt-8 mx-5 gap-y-5 bg-rose-50 border-2 border-rose-700 px-5 lg:px-10 py-8 rounded-lg">
        <h2 class="font-semibold text-center text-xl lg:text-2xl">โปรดเข้าสู่ระบบเพื่อเก็บข้อมูลเกม</h2>
        <button
            class="flex flex-row gap-x-2 bg-rose-800 hover:bg-rose-700 text-rose-200 px-3 py-2 rounded-lg transition"
            @click="signInWithGoogle">
            <p class="font-bold">เข้าสู่ระบบด้วย</p>
            <img src="/icon/google.png" alt="google" class="w-6">
        </button>
    </div>
    <div v-else-if="userData && !appData.loading" class="flex lg:grid flex-col lg:grid-cols-3 text-center mt-8">
        <div class="bg-green-200 text-green-950 px-20 py-8 m-2 rounded-lg border-2 border-green-800">
            <h2 class="text-3xl font-bold">3 หมายเลข</h2>
            <p class="mb-2">สำหรับเล่นง่ายๆ เพลินๆ สบายๆ</p>
            <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerData.level3 }}</p>
            <div class="flex flex-col gap-y-1 justify-center">
                <div>
                    <button @click="onPlayerPlay(3)"
                        class="bg-green-800 text-green-100 hover:opacity-80 transition text-xl font-bold px-10 py-1 rounded-xl"><font-awesome-icon
                            :icon="['fas', 'play']" /> PLAY</button>
                </div>
                <div>
                    <button @click="onPlayerResetLevelConfirm(3)"
                        class="bg-green-800 text-green-100 hover:opacity-80 transition font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
                </div>
            </div>
        </div>
        <div class="bg-yellow-200 text-yellow-950 px-20 py-8 m-2 rounded-lg border-2 border-yellow-800">
            <h2 class="text-3xl font-bold">5 หมายเลข</h2>
            <p class="mb-2">สำหรับความท้าทายปานกลาง</p>
            <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerData.level5 }}</p>
            <div class="flex flex-col gap-y-1 justify-center">
                <div>
                    <button @click="onPlayerPlay(5)"
                        class="bg-yellow-800 text-yellow-100 hover:opacity-80 transition text-xl font-bold px-10 py-1 rounded-xl"><font-awesome-icon
                            :icon="['fas', 'play']" /> PLAY</button>
                </div>
                <div>
                    <button @click="onPlayerResetLevelConfirm(5)"
                        class="bg-yellow-800 text-yellow-100 hover:opacity-80 transition font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
                </div>
            </div>
        </div>
        <div class="bg-red-200 text-red-950 px-20 py-8 m-2 rounded-lg border-2 border-red-800">
            <h2 class="text-3xl font-bold">10 หมายเลข</h2>
            <p class="mb-2">สำหรับความท้าทายที่สูง</p>
            <p class="mb-3 text-sm"><span class="font-semibold">เลเวลปัจจุบัน : </span>{{ playerData.level10 }}</p>
            <div class="flex flex-col gap-y-1 justify-center">
                <div>
                    <button @click="onPlayerPlay(10)"
                        class="bg-red-800 text-red-100 hover:opacity-80 transition text-xl font-bold px-10 py-1 rounded-xl"><font-awesome-icon
                            :icon="['fas', 'play']" /> PLAY</button>
                </div>
                <div>
                    <button @click="onPlayerResetLevelConfirm(10)"
                        class="bg-red-800 text-red-100 hover:opacity-80 transition font-medium px-3 py-1 rounded-xl">รีเซ็ตเลเวล</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="userData && !appData.loading" class="flex flex-row justify-center mt-5">
        <button
            class="flex flex-row gap-x-2 bg-red-200 hover:bg-red-300 text-red-950 border-2 border-red-300 px-3 py-2 rounded-lg transition"
            @click="signOut">
            <p class="font-bold">ออกจากระบบ</p>
        </button>
    </div>
</template>