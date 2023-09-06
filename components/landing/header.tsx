import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-screen bg-white p-5 px-20 flex justify-between">
      <h1 className="text-2xl text-rose-400 font-bold">
        Faxinou
      </h1>

      <div className="flex gap-2">

        <Button>
          Seja uma profissional
        </Button>
        <Button asChild variant="primaryOutline">
          <Link href="signin">
            Entrar
          </Link>
        </Button>

      </div>
    </header>
  )
}