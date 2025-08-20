import { supabase } from '../../supabase.js'
import userData from '../../stores/userdata'

export default async function setScoreLevel(level, value) {
    if (level == 3) {
        return await supabase.from('koon2120_memorytest_db').update({ 'level3': value }).eq('created_by', userData.value.id)
    } else if (level == 5) {
        return await supabase.from('koon2120_memorytest_db').update({ 'level5': value }).eq('created_by', userData.value.id)
    } else if (level == 10) {
        return await supabase.from('koon2120_memorytest_db').update({ 'level10': value }).eq('created_by', userData.value.id)
    }
}