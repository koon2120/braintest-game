import gameData from "../stores/gamedata"
import playerData from "../stores/playerdata"
import setScoreLevel from "./supabase/setScoreLevel"

// ตรวจสอบคำตอบ
export default function AnswerVerify() {
    gameData.value.mainNumber = gameData.value.userAnswer
    gameData.value.isUserAnswer = true
    if (String(gameData.value.numberList[gameData.value.numberNo - 1]) === String(gameData.value.userAnswer)) {
      gameData.value.verifyStatus = 1
      playerData.value.levelDefault += 1
      if (gameData.value.numberNoLimit == 3) {
        playerData.value.level3 = playerData.value.levelDefault
        setScoreLevel(3,playerData.value.levelDefault)
      } else if (gameData.value.numberNoLimit == 5) {
        playerData.value.level5 = playerData.value.levelDefault
        setScoreLevel(5,playerData.value.levelDefault)
      } else if (gameData.value.numberNoLimit == 10) {
        playerData.value.level10 = playerData.value.levelDefault
        setScoreLevel(10,playerData.value.levelDefault)
      }
    } else {
      gameData.value.verifyStatus = 2
    }
  }