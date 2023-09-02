import {Input} from "@/components/ui/input";
import {RxMagnifyingGlass} from "react-icons/rx";

export default function BookInput () {
  return (
    <section className="p-4">
      <div className="rounded-full border border-neutral-100 bg-neutral-100 p-2 flex items-center gap-5 text-neutral-500">
        <RxMagnifyingGlass className="text-xl " />
        Agendar serviço
      </div>
    </section>
  )
}