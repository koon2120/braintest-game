import gameData from "../stores/gamedata"
import appData from "../stores/appdata"

// ตรวจจับว่า playerResetLevel มีการเปลื่ยนแปลงไหม
export default function onPlayerResetLevelConfirm(level) {
    appData.value.pageState = 'confirm'
    if (level == 3) {
      gameData.value.playerResetLevel = 3
    }else if (level == 5) {
      gameData.value.playerResetLevel = 5
    }else if (level == 10) {
      gameData.value.playerResetLevel = 10
    }
  }