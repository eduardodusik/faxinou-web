import Hero from "@/components/landing/hero";
import {Header} from "@/components/landing/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header/>
      <Hero/>
    </main>
  )
}
