import {Button} from "@/components/ui/button";
import {Avatar} from "@/components/ui/avatar";
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="p-5 md:px-20 w-screen">
      <div className="bg-white flex justify-between">
        <h1 className="text-2xl text-rose-400 font-bold">
          Faxinou
        </h1>

        <div className="flex gap-2">

          <div className="hidden md:inline-flex">
            <Button>
              Seja um profissional
            </Button>
          </div>
          <Button asChild variant="primaryOutline">
            <Link href="signin">
              Entrar
            </Link>
          </Button>

        </div>
      </div>
      <div className="md:hidden flex justify-center pt-6">
      <Button className="w-screen">
        Seja um profissional
      </Button>
      </div>
    </header>
  )
}