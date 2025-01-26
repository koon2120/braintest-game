import gameData from "../stores/gamedata"
import playerData from "../stores/playerdata"
import appData from "../stores/appdata"
import NewGameSetUp from "./NewGameSetUp"
import NextProcress from "./NextProcress"

// เมื่อผู้เล่นกดเล่น
export default function onPlayerPlay(number) {
    NewGameSetUp()
    if (number == 3) {
      gameData.value.numberNoLimit = 3
      playerData.value.levelDefault = playerData.value.level3
    } else if (number == 5) {
      gameData.value.numberNoLimit = 5
      playerData.value.levelDefault = playerData.value.level5
    } else if (number == 10) {
      gameData.value.numberNoLimit = 10
      playerData.value.levelDefault = playerData.value.level10
    }
    NextProcress()
    appData.value.pageState = 'ingame'
  }