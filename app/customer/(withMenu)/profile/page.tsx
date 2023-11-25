"use client"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export default function Profile () {
  const supabase = createClientComponentClient()

  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <section className="p-6 mt-6">


      <div className="p-3 border-b border-zinc-200 text-zinc-800">
        <Link className="pl-3" href="profile/edit">
          Editar perfil
        </Link>
      </div>

      <div className="p-3 border-b border-zinc-200 ">
        <Button variant="link" onClick={logout}>
          Sair
        </Button>
      </div>

    </section>
  )
}