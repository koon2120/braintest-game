import getScoreLevel from "./supabase/getScoreLevel"
import playerData from "../stores/playerdata"
import appData from "../stores/appdata"

export default async function setUpScore() {
    const scoreData = await getScoreLevel()
    playerData.value.level3 = scoreData.data[0].level3
    playerData.value.level5 = scoreData.data[0].level5
    playerData.value.level10 = scoreData.data[0].level10
    appData.value.loading = false
}