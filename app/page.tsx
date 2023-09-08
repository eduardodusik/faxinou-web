import Hero from "@/components/landing/hero";
import {Header} from "@/components/landing/header";
import Book from "@/components/landing/Book";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header/>
      <Hero/>
      <Book />
    </main>
  )
}
