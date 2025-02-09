import { supabase } from '../../supabase.js'
import userData from '../../stores/userdata.js'

export default function signOut() {
    supabase.auth.signOut()
    userData.value = null
}