import {Button} from "@/components/ui/button";
import Link from "next/link";
import {getSession} from "@/app/supabase-server";

export const ButtonHome = async () => {
  const session = await getSession()
  if (!session) {
    return (
      <Button asChild variant="primaryOutline">
        <Link href="signin">
          Entrar
        </Link>
      </Button>
    )
  }
  return (
    <Button asChild variant="primaryOutline">
      <Link href="/customer">Home</Link>
    </Button>
  )

}