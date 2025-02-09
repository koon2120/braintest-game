import { supabase } from '../../supabase.js'

export default function signInWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }