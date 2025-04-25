import gameData from "../stores/gamedata"
import playerData from "../stores/playerdata"
import appData from "../stores/appdata"
import setScoreLevel from "./supabase/setScoreLevel"

// ผู้เล่นกดปุ่มรีเซ็ตเลเวลหน้าเกม และต้องกดยืนยันก่อน
export default function onPlayerResetLevel(value) {
    if (gameData.value.playerResetLevel != 0 && value) {
      if (gameData.value.playerResetLevel == 3) {
        setScoreLevel(3,0)
        playerData.value.level3 = 0
      } else if (gameData.value.playerResetLevel == 5) {
        setScoreLevel(5,0)
        playerData.value.level5 = 0
      } else if (gameData.value.playerResetLevel == 10) {
        setScoreLevel(10,0)
        playerData.value.level10 = 0
      }
    }
    gameData.value.playerResetLevel = 0
    appData.value.pageState = 'start'
  }