import {Services} from "@/app/customer/(withMenu)/components";
import {Hero} from "@/components/layout/Hero";

export default function CustomerPage() {
  return (
    <section className="p-6">
      <Hero />
      <section className="pt-5">
        <h1 className="text-lg font-bold">Qual serviço você está buscando?</h1>
         <Services />
      </section>
    </section>
  )
}