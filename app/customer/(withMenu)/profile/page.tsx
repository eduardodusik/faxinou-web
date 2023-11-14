"use client"
import {Button} from "@/components/ui/button";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {useRouter} from "next/navigation";

export default function Profile () {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const logout = () => {
    supabase.auth.signOut()
    router.refresh()
  }

  return (
    <section>
      <h1>Perfil</h1>

      <Button variant="link" onClick={logout}>
        Sair
      </Button>
    </section>
  )
}