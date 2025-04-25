import gameData from "../stores/gamedata"
import playerData from "../stores/playerdata"

// เมื่อผู้เล่นกดต่อไป มีการเช็คว่าไปต่อหรือเข้าสู่คำถาม
export default function NextProcress() {
    if (gameData.value.numberNo != gameData.value.numberNoLimit && !gameData.value.isQuestion) {
      gameData.value.isQuestion = false
      gameData.value.isUserAnswer = false
      gameData.value.numberNo += 1;
      gameData.value.mainNumber = Math.floor(Math.random() * (9 + (10 * (playerData.value.levelDefault)))) + 1;
      gameData.value.numberList.push(gameData.value.mainNumber)
    } else if (gameData.value.numberNo == gameData.value.numberNoLimit) {
      gameData.value.isQuestion = true
      gameData.value.numberNo = Math.floor(Math.random() * gameData.value.numberNoLimit) + 1;
      gameData.value.mainNumber = "?";
    }
  }