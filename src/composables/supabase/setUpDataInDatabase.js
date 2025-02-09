import { supabase } from '../../supabase.js'
import userData from '../../stores/userdata.js'

export default async function setUpDataInDatabase() {
    const memoryTestData = await supabase.from('koon2120_memorytest_db').select().eq('created_by',userData.value.id)
    if (memoryTestData.data.length == 0) {
        await supabase.from('koon2120_memorytest_db').insert({created_by:userData.value.id})
    }
}