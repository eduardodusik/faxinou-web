import Image from "next/image";
import heroImage from "@/public/cleaner.png";
import {Input} from "@/components/ui/input";
import {TextSlideUp} from "@/components/landing/TextSlideUp";
import {Avatar} from "@/components/ui/avatar";

export default function Hero() {
  return (
    <header className="h-screen bg-white p-20">
      <section className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-3 justify-center">
          <div className="text-2xl font-bold">
            <div className="flex gap-1">
              <span className="whitespace-nowrap">
               Descubra o prazer de ter
              </span>
              <span>
                <TextSlideUp/>
              </span>
            </div>
            <span>limpa essa semana.</span>
          </div>
          <h2 className="text-neutral-500">
            Agende um serviço de limpeza com um profissional de confiança.
          </h2>
          <div>
            <Input placeholder="Qual a cidade?"/>
          </div>
        </div>

        <div className="flex gap-4">
          <Image src={heroImage} alt="Faxineira"/>
        </div>
      </section>
    </header>
  )
}