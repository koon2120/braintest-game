import { ref } from "vue";

const gameData = ref({
    mainNumber:0, // mainNumber for show , numberList for store
    numberList:[],
    numberNo:0, // numberNo use Ingame page , numberNoLimit set in start page
    numberNoLimit:3,
    isQuestion:false,
    isUserAnswer:false,
    userAnswer:'',
    verifyStatus:0,
    playerResetLevel:0, //reset level
})

export default gameData