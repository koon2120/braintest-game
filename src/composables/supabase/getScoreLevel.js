import { supabase } from '../../supabase.js'
import userData from '../../stores/userdata'

export default async function getScoreLevel() {
    if (userData.value) {
        return await supabase.from('koon2120_memorytest_db').select().eq('created_by',userData.value.id)
    }
}