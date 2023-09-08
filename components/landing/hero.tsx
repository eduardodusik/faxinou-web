import Image from "next/image";
import heroImage from "@/public/cleaner.png";
import {Input} from "@/components/ui/input";
import {TextSlideUp} from "@/components/landing/TextSlideUp";

export default function Hero() {
  return (
    <header className="h-screen bg-white p-4 md:p-20">
      <section className="grid grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-3 justify-center">
          <div className="text-lg md:text-2xl font-bold">
            <div className="flex gap-1">
              <span>
               Descubra o prazer de ter <TextSlideUp/> limpa essa semana.
              </span>
              <span>

              </span>
            </div>
            <span></span>
          </div>
          <h2 className="text-neutral-500 text-sm">
            Agende um serviço de limpeza com um profissional de confiança.
          </h2>
          <div className="pt-2">
            <Input placeholder="Qual a cidade?"/>
          </div>
        </div>

        <div className="">
          <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} src={heroImage} alt="Faxineira"/>
        </div>
      </section>
    </header>
  )
}