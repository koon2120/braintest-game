import gameData from "../stores/gamedata"
import playerData from "../stores/playerdata"
import appData from "../stores/appdata"

// ผู้เล่นกดปุ่มรีเซ็ตเลเวลหน้าเกม และต้องกดยืนยันก่อน
export default function onPlayerResetLevel(value) {
    if (gameData.value.playerResetLevel != 0 && value) {
      if (gameData.value.playerResetLevel == 3) {
        localStorage.setItem('player-level-3', "1")
        playerData.value.level3 = 1
      } else if (gameData.value.playerResetLevel == 5) {
        localStorage.setItem('player-level-5', "1")
        playerData.value.level5 = 1
      } else if (gameData.value.playerResetLevel == 10) {
        localStorage.setItem('player-level-10', "1")
        playerData.value.level10 = 1
      }
    }
    gameData.value.playerResetLevel = 0
    appData.value.pageState = 'start'
  }