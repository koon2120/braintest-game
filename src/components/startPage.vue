<script setup>
import playerData from '../stores/playerdata';
import onPlayerPlay from '../composables/onPlayerPlay'
import onPlayerResetLevelConfirm from '../composables/onPlayerResetLevelConfirm'
</script>

<template>
    <div class="text-center">
        <h1 class="text-2xl lg:text-5xl font-bold">เกมทายตัวเลขสำหรับเล่นเพลินๆ</h1>
        <p class="text-md font-medium">version 1.4</p>
    </div>
    <div class="flex flex-col text-center mt-8">
        <div class="bg-green-200 px-20 py-8 m-2 rounded-lg border-2 border-green-800">
            <h2 class="text-3xl font-bold">3 หมายเลข</h2>
            <p class="mb-2">สำหรับเล่นง่ายๆ ชิวๆ เพลินๆ สบายๆ</p>
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
        <div class="bg-yellow-200 px-20 py-8 m-2 rounded-lg border-2 border-yellow-800">
            <h2 class="text-3xl font-bold">5 หมายเลข</h2>
            <p class="mb-2">ระดับปานกลาง สำหรับความท้าทายที่ไม่ได้ยากเกินไป</p>
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
        <div class="bg-red-200 px-20 py-8 m-2 rounded-lg border-2 border-red-800">
            <h2 class="text-3xl font-bold">10 หมายเลข</h2>
            <p class="mb-2">ระดับยาก สำหรับความท้าทายที่สูง</p>
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
</template>