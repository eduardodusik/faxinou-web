"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function LogoutPage () {
  const supabase = createClientComponentClient()
  supabase.auth.signOut()


  return (
    <section>
    </section>
  )
}