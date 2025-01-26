import gameData from "../stores/gamedata"

// เมื่อเกมเริ่มต้นใหม่
export default function NewGameSetUp() {
  gameData.value.userAnswer = "";
  gameData.value.verifyStatus = 0;
  gameData.value.isQuestion = false;
  gameData.value.numberNo = 0;
  gameData.value.numberList = [];
}
