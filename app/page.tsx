import Hero from "@/components/landing/hero";
import {Header} from "@/components/landing/header";
import CleanType from "components/BookConfig/CleanType";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col rel">
      <Header/>
      <Hero/>
      <div className="p-5">
        <Button asChild variant="primaryOutline" className="w-full">
          <Link href="/customer/book">
            Agendar
          </Link>
        </Button>
      </div>
    </main>
  )
}
