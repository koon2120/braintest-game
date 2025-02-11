import { supabase } from '../../supabase.js'
import userData from '../../stores/userdata.js'
import setUpDataInDatabase from './setUpDataInDatabase.js'
import appData from '../../stores/appdata.js'

export default async function checkUser() {
    const user = await supabase.auth.getUser()
    userData.value = user.data.user
    if (user.data.user) {
        setUpDataInDatabase()
    }
    appData.value.loading=false
}